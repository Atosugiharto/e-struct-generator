import React, { useMemo, useRef, useState } from "react";
import html2canvas from "html2canvas";
import { TrashIcon } from "@heroicons/react/outline";

// ==== Helpers ====
const rid = () => Math.random().toString(36).slice(2, 9);
const toNum = (v) => {
  if (typeof v === "number") return v;
  if (!v) return 0;
  const n = Number(String(v).replace(/[^0-9.-]/g, ""));
  return Number.isFinite(n) ? n : 0;
};
const fmtIDR = (n) =>
  `Rp${Math.round(n).toLocaleString("id-ID", { maximumFractionDigits: 0 })}`;

export default function App() {
  // ==== Form State ====
  const [products, setProducts] = useState([
    {
      id: rid(),
      imageUrl: undefined,
      imageFile: null,
      total: 1,
      name: "",
      price: 0,
    },
  ]);
  const [discountProduct, setDiscountProduct] = useState(0);
  const [deliveryCost, setDeliveryCost] = useState(5500);
  const [discountDelivery, setDiscountDelivery] = useState(0);
  const [serviceCost, setServiceCost] = useState(1500);
  const [packagingCost, setPackagingCost] = useState(2499);
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("10 Okt 2025 19:20");
  const [method, setMethod] = useState("ShopeePay");
  const [fileName, setFileName] = useState("");

  const [orderNo] = useState(() => `${Date.now()}`.slice(-10) + rid());

  const receiptRef = useRef(null);

  // === NEW: consent state for enabling submit ===
  const [agree, setAgree] = useState(false);

  // ==== Derived Totals ====
  const { subtotal, itemsCount, deliveryPayable, grandTotal } = useMemo(() => {
    const subtotal = products.reduce(
      (acc, p) => acc + toNum(p.price) * toNum(p.total),
      0
    );
    const itemsCount = products.reduce((acc, p) => acc + toNum(p.total), 0);
    const deliveryPayable = Math.max(
      toNum(deliveryCost) - toNum(discountDelivery),
      0
    );
    const grandTotal =
      subtotal -
      toNum(discountProduct) +
      deliveryPayable +
      toNum(serviceCost) +
      toNum(packagingCost);
    return { subtotal, itemsCount, deliveryPayable, grandTotal };
  }, [
    products,
    discountProduct,
    deliveryCost,
    discountDelivery,
    serviceCost,
    packagingCost,
  ]);

  // ==== Handlers ====
  const onPickImage = (idx, file) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setProducts((prev) =>
      prev.map((p, i) =>
        i === idx ? { ...p, imageFile: file, imageUrl: url } : p
      )
    );
  };
  const addRow = () =>
    setProducts((p) => [
      ...p,
      {
        id: rid(),
        imageFile: null,
        imageUrl: undefined,
        total: 1,
        name: "",
        price: 0,
      },
    ]);
  const removeRow = (id) =>
    setProducts((p) => (p.length > 1 ? p.filter((x) => x.id !== id) : p));

  const downloadJPEG = async () => {
    const node = receiptRef.current;
    if (!node) return;
    await new Promise((r) => setTimeout(r, 80));
    const canvas = await html2canvas(node, {
      backgroundColor: "#ffffff",
      scale: 2,
      useCORS: true,
    });
    const dataUrl = canvas.toDataURL("image/jpeg", 0.95);
    const a = document.createElement("a");
    a.href = dataUrl;
    let base =
      fileName && fileName.trim() ? fileName.trim() : `receipt-${orderNo}`;
    const lower = base.toLowerCase();
    if (!lower.endsWith(".jpg") && !lower.endsWith(".jpeg")) base += ".jpg";
    a.download = base;
    a.click();
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-6xl p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ================= LEFT: FORM ================= */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h1 className="text-xl font-semibold mb-4">Generator Struk JPEG</h1>

          <div className="space-y-6">
            {/* Products */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-semibold">Produk</h2>
                <button
                  onClick={addRow}
                  className="px-3 py-1.5 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  + Tambah Baris
                </button>
              </div>

              <div className="space-y-3">
                {products.map((row, idx) => (
                  <div
                    key={row.id}
                    className="grid grid-cols-12 gap-3 items-end border rounded-xl p-3"
                  >
                    <div className="col-span-12 sm:col-span-3">
                      <label className="block text-xs text-slate-600 mb-1">
                        Gambar
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          onPickImage(idx, e.target.files && e.target.files[0])
                        }
                        className="block w-full text-sm file:mr-3 file:py-2 file:px-3 file:rounded file:border-0 file:bg-slate-100 file:text-slate-700"
                      />
                      {row.imageUrl && (
                        <img
                          src={row.imageUrl}
                          alt="preview"
                          className="mt-2 h-16 w-16 rounded object-cover border"
                        />
                      )}
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label className="block text-xs text-slate-600 mb-1">
                        Nama
                      </label>
                      <input
                        value={row.name}
                        onChange={(e) =>
                          setProducts((prev) =>
                            prev.map((p, i) =>
                              i === idx ? { ...p, name: e.target.value } : p
                            )
                          )
                        }
                        className="w-full rounded-lg border px-3 py-2 text-sm"
                        placeholder="Contoh: Burger Reguler"
                      />
                    </div>
                    <div className="col-span-3 sm:col-span-2">
                      <label className="block text-xs text-slate-600 mb-1">
                        Total
                      </label>
                      <input
                        type="number"
                        min={1}
                        value={row.total}
                        onChange={(e) =>
                          setProducts((prev) =>
                            prev.map((p, i) =>
                              i === idx
                                ? { ...p, total: toNum(e.target.value) || 1 }
                                : p
                            )
                          )
                        }
                        className="w-full rounded-lg border px-3 py-2 text-sm"
                      />
                    </div>
                    <div className="col-span-3 sm:col-span-2">
                      <label className="block text-xs text-slate-600 mb-1">
                        Harga (per item)
                      </label>
                      <input
                        type="number"
                        min={0}
                        value={row.price}
                        onChange={(e) =>
                          setProducts((prev) =>
                            prev.map((p, i) =>
                              i === idx
                                ? { ...p, price: toNum(e.target.value) }
                                : p
                            )
                          )
                        }
                        className="w-full rounded-lg border px-3 py-2 text-sm"
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-1 flex justify-end">
                      <button
                        onClick={() => removeRow(row.id)}
                        className="px-3 py-2 rounded-lg border text-slate-600 hover:bg-slate-50"
                      >
                        <TrashIcon className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Money rows */}
            <div className="grid grid-cols-2 gap-3">
              <MoneyInput
                label="Diskon Produk"
                value={discountProduct}
                onChange={setDiscountProduct}
              />
              <MoneyInput
                label="Biaya Pengiriman"
                value={deliveryCost}
                onChange={setDeliveryCost}
              />
              <MoneyInput
                label="Diskon Pengiriman"
                value={discountDelivery}
                onChange={setDiscountDelivery}
              />
              <MoneyInput
                label="Biaya Layanan"
                value={serviceCost}
                onChange={setServiceCost}
              />
              <MoneyInput
                label="Biaya Pengemasan"
                value={packagingCost}
                onChange={setPackagingCost}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-slate-600 mb-1">
                  Catatan
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-lg border px-3 py-2 text-sm"
                  placeholder="Tambahkan catatan (opsional)"
                />
              </div>
              <div className="grid grid-cols-1 gap-3">
                <div>
                  <label className="block text-xs text-slate-600 mb-1">
                    Waktu Pemesanan (contoh: 10 Okt 2025 19:20)
                  </label>
                  <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-lg border px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-600 mb-1">
                    Metode Pembayaran
                  </label>
                  <select
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                    className="w-full rounded-lg border px-3 py-2 text-sm"
                  >
                    <option>ShopeePay</option>
                    <option>Tunai (COD)</option>
                    <option>SPayLater</option>
                    <option>Virtual Account</option>
                  </select>
                </div>
              </div>
            </div>

            {/* File name */}
            <div>
              <label className="block text-xs text-slate-600 mb-1">
                File name (tanpa .jpg juga boleh)
              </label>
              <input
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                placeholder={`receipt-${orderNo}`}
                className="w-full rounded-lg border px-3 py-2 text-sm"
              />
            </div>

            {/* === NEW: Consent checkbox === */}
            <div className="rounded-xl border bg-slate-50 p-4">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mt-0.5 h-4 w-4 accent-emerald-600"
                />
                <span className="text-xs leading-5 text-slate-700">
                  Dengan mengklik ini Anda sepenuhnya bertanggung jawab terhadap
                  diri Anda sendiri terhadap penggunaan e-struct generator ini,
                  developer tidak bertanggung jawab apabila Anda menggunakannya
                  untuk hal yang tidak baik.
                </span>
              </label>
            </div>

            <div className="flex items-center justify-between border-t pt-4 mt-2">
              <div className="text-sm text-slate-600">
                <div>
                  Subtotal:{" "}
                  <span className="font-semibold">{fmtIDR(subtotal)}</span>
                </div>
                <div>
                  Total Bayar:{" "}
                  <span className="font-semibold">{fmtIDR(grandTotal)}</span>
                </div>
              </div>

              <button
                onClick={downloadJPEG}
                disabled={!agree}
                title={!agree ? "Centang persetujuan terlebih dahulu" : ""}
                className={`px-4 py-2.5 rounded-xl text-white text-sm font-medium ${
                  agree
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : "bg-emerald-400 cursor-not-allowed opacity-60"
                }`}
                aria-disabled={!agree}
              >
                Download JPEG
              </button>
            </div>
          </div>
        </div>

        {/* ================= RIGHT: RECEIPT PREVIEW ================= */}
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Preview Gambar</h2>
            <span className="text-xs text-slate-500">
              *Bagian ini yang akan di-render
            </span>
          </div>

          <div
            ref={receiptRef}
            className="mx-auto w-full max-w-[720px] bg-white rounded-[20px] border overflow-hidden tracking-tight"
          >
            {/* HEADER */}
            <div className="px-6 pt-6 pb-5 border-b">
              <h3 className="text-[28px] leading-8 font-semibold">
                Item Details
              </h3>
            </div>

            {/* ITEMS */}
            <div className="px-6 py-6 space-y-5">
              <div className="space-y-4">
                {products.map((p) => (
                  <div
                    key={p.id}
                    className="grid grid-cols-[72px_1fr_auto] gap-3 items-center"
                  >
                    <div className="h-[72px] w-[72px] rounded-lg overflow-hidden bg-slate-100 border flex items-center justify-center text-slate-400 text-xs">
                      {p.imageUrl ? (
                        <img
                          src={p.imageUrl}
                          alt={p.name || "product"}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span>No Image</span>
                      )}
                    </div>
                    <div className="leading-tight">
                      <div className="text-[18px] font-semibold">
                        {p.total} x {p.name || "(tanpa nama)"}
                      </div>
                    </div>
                    <div className="text-right text-[18px] font-semibold">
                      {fmtIDR(toNum(p.price))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="text-slate-600">
                  Subtotal Pesanan ({itemsCount} menu)
                </div>
                <div className="font-semibold">{fmtIDR(subtotal)}</div>
              </div>

              <div className="space-y-2 pt-2">
                <MoneyRow
                  label="Voucher Diskon"
                  value={-toNum(discountProduct)}
                  negative
                />

                <div className="flex items-center justify-between text-slate-700">
                  <div className="flex items-center gap-2">
                    <span>Biaya Pengiriman</span>
                  </div>
                  {toNum(discountDelivery) > 0 ? (
                    <div className="flex items-center gap-3 text-right">
                      <span className="line-through text-slate-400">
                        {fmtIDR(toNum(deliveryCost))}
                      </span>
                      <span>{fmtIDR(deliveryPayable)}</span>
                    </div>
                  ) : (
                    <span>{fmtIDR(deliveryPayable)}</span>
                  )}
                </div>

                <MoneyRow label="Biaya Layanan" value={toNum(serviceCost)} />
                <MoneyRow
                  label="Biaya Pengemasan"
                  value={toNum(packagingCost)}
                />
              </div>

              {/* TOTAL right aligned with small note below */}
              <div className="relative mt-4">
                <div className="flex">
                  <div className="ml-auto text-right">
                    <div className="text-[28px] font-semibold">
                      {fmtIDR(grandTotal)}
                    </div>
                    <div className="text-slate-500 text-xs">
                      Sudah termasuk pajak
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none select-none absolute -top-6 right-6 opacity-20">
                  <div className="h-24 w-24 rounded-full border-2 border-slate-300 flex items-center justify-center rotate-[-15deg]">
                    <span className="font-semibold text-slate-500">Paid</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ORDER INFO */}
            <div className="border-t bg-slate-50 px-6 py-6">
              <h3 className="text-xl font-semibold mb-4">Order Info</h3>
              <div className="grid grid-cols-1 gap-y-3">
                <Info
                  label="Catatan Tambahan"
                  value={notes ? notes : "Tidak ada"}
                />
                <Info label="No. Pesanan" value={orderNo} copy />
                <Info label="Waktu Pemesanan" value={date} />
                <Info label="Pembayaran" value={method} />
                <Info label="Bukti Pengiriman" value="Lihat Foto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} — Demo generator struk JPEG
      </footer>
    </div>
  );
}

function MoneyInput({ label, value, onChange }) {
  return (
    <div>
      <label className="block text-xs text-slate-600 mb-1">{label}</label>
      <div className="flex rounded-lg border overflow-hidden">
        <span className="px-3 bg-slate-50 text-slate-500 text-sm flex items-center">
          Rp
        </span>
        <input
          type="number"
          min={0}
          value={value}
          onChange={(e) => onChange(toNum(e.target.value))}
          className="w-full px-3 py-2 text-sm"
        />
      </div>
    </div>
  );
}

function MoneyRow({ label, value, negative }) {
  const isRed = negative && Math.abs(value || 0) > 0; // nilai 0 tidak merah
  return (
    <div className="flex items-center justify-between text-slate-700">
      <div>{label}</div>
      <div className={isRed ? "text-red-600" : ""}>
        {value !== undefined
          ? negative
            ? `-${fmtIDR(Math.abs(value))}`
            : fmtIDR(value)
          : null}
      </div>
    </div>
  );
}

function Info({ label, value, copy }) {
  return (
    <div className="grid grid-cols-[160px_1fr_auto] items-center gap-3 text-sm">
      <div className="text-slate-500 whitespace-nowrap">{label}</div>
      <div className="font-medium whitespace-nowrap">{value}</div>
      {copy ? (
        <button
          className="text-xs px-2 py-1 rounded border bg-white hover:bg-slate-50"
          onClick={() => navigator.clipboard.writeText(value)}
        >
          Salin
        </button>
      ) : (
        <span />
      )}
    </div>
  );
}
