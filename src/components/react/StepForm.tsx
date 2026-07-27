import { useState } from "react";

interface FormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  mensaje: string;
  website: string;
}

const initialData: FormData = {
  nombre: "",
  empresa: "",
  email: "",
  telefono: "",
  mensaje: "",
  website: "",
};

export default function StepForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (step === 1) {
      if (!data.nombre.trim()) e.nombre = "Requerido";
      if (!data.empresa.trim()) e.empresa = "Requerido";
    }
    if (step === 2) {
      if (!data.email.trim()) e.email = "Requerido";
      if (!data.telefono.trim()) e.telefono = "Requerido";
    }
    if (step === 3) {
      if (!data.mensaje.trim()) e.mensaje = "Requerido";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (validate()) setStep((s) => s + 1);
  };

  const back = () => setStep((s) => s - 1);

  const handleSubmit = async () => {
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "ok") {
    return (
      <div className="bg-white rounded-xl p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg width="24" height="24" fill="none" stroke="#16a34a" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-xl text-gs-ink mb-2">Mensaje enviado</h3>
        <p className="font-body text-sm text-gs-ink/50">Te contactaremos pronto.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-8">
      <div className="flex gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-1 flex-1 rounded-full transition-colors ${
              s <= step ? "bg-gs-crimson" : "bg-gs-ink/10"
            }`}
          />
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label className="font-body text-xs uppercase tracking-wider text-gs-ink/40 block mb-1">Nombre</label>
            <input
              type="text"
              value={data.nombre}
              onChange={(e) => update("nombre", e.target.value)}
              className="w-full border border-gs-ink/10 rounded-lg px-4 py-2.5 font-body text-sm focus:outline-none focus:border-gs-crimson"
            />
            {errors.nombre && <span className="text-red-500 text-xs font-body">{errors.nombre}</span>}
          </div>
          <div>
            <label className="font-body text-xs uppercase tracking-wider text-gs-ink/40 block mb-1">Empresa</label>
            <input
              type="text"
              value={data.empresa}
              onChange={(e) => update("empresa", e.target.value)}
              className="w-full border border-gs-ink/10 rounded-lg px-4 py-2.5 font-body text-sm focus:outline-none focus:border-gs-crimson"
            />
            {errors.empresa && <span className="text-red-500 text-xs font-body">{errors.empresa}</span>}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div>
            <label className="font-body text-xs uppercase tracking-wider text-gs-ink/40 block mb-1">Email</label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
              className="w-full border border-gs-ink/10 rounded-lg px-4 py-2.5 font-body text-sm focus:outline-none focus:border-gs-crimson"
            />
            {errors.email && <span className="text-red-500 text-xs font-body">{errors.email}</span>}
          </div>
          <div>
            <label className="font-body text-xs uppercase tracking-wider text-gs-ink/40 block mb-1">Teléfono</label>
            <input
              type="tel"
              value={data.telefono}
              onChange={(e) => update("telefono", e.target.value)}
              className="w-full border border-gs-ink/10 rounded-lg px-4 py-2.5 font-body text-sm focus:outline-none focus:border-gs-crimson"
            />
            {errors.telefono && <span className="text-red-500 text-xs font-body">{errors.telefono}</span>}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <div>
            <label className="font-body text-xs uppercase tracking-wider text-gs-ink/40 block mb-1">Mensaje</label>
            <textarea
              value={data.mensaje}
              onChange={(e) => update("mensaje", e.target.value)}
              rows={4}
              className="w-full border border-gs-ink/10 rounded-lg px-4 py-2.5 font-body text-sm focus:outline-none focus:border-gs-crimson resize-none"
            />
            {errors.mensaje && <span className="text-red-500 text-xs font-body">{errors.mensaje}</span>}
          </div>
        </div>
      )}

      {/* Honeypot — hidden, never visible or focusable */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={data.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <div className="flex justify-between mt-6">
        {step > 1 ? (
          <button
            type="button"
            onClick={back}
            className="font-body text-sm text-gs-ink/50 hover:text-gs-ink transition-colors"
          >
            Anterior
          </button>
        ) : (
          <div />
        )}

        {step < 3 ? (
          <button
            type="button"
            onClick={next}
            className="bg-gs-crimson text-white px-6 py-2.5 rounded-lg font-body text-sm uppercase tracking-wider hover:bg-gs-crimson/90 transition-colors"
          >
            Siguiente
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={status === "loading"}
            className="bg-gs-crimson text-white px-6 py-2.5 rounded-lg font-body text-sm uppercase tracking-wider hover:bg-gs-crimson/90 transition-colors disabled:opacity-50"
          >
            {status === "loading" ? "Enviando..." : "Enviar"}
          </button>
        )}
      </div>

      {status === "error" && (
        <p className="text-red-500 text-xs font-body mt-3">Error al enviar. Intenta nuevamente.</p>
      )}
    </div>
  );
}
