import { useState } from "react";
import { CheckSquare, XSquare, Home } from "reicon-react";

interface FormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  servicios: string[];
  mensaje: string;
  presupuesto: string;
  website: string;
}

const initialData: FormData = {
  nombre: "",
  empresa: "",
  email: "",
  telefono: "",
  servicios: [],
  mensaje: "",
  presupuesto: "",
  website: "",
};

const serviciosList = [
  "Equipamiento",
  "Mantenciones",
  "Insumos",
  "Reparaciones",
];

const presupuestos = [
  "Menos de $5M",
  "$5M - $15M",
  "$15M - $50M",
  "$50M+",
  "Aún no defino",
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[\d\s\+\-\(\)]{8,}$/;

export default function StepForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));

    const newErrors: Record<string, string> = {};

    if (field === "email") {
      if (value.trim() && !emailRegex.test(value)) {
        newErrors.email = "Ingresa un email válido";
      }
    }

    if (field === "telefono") {
      if (value.trim() && !phoneRegex.test(value)) {
        newErrors.telefono = "Ingresa un teléfono válido";
      }
    }

    setErrors((prev) => ({ ...prev, [field]: newErrors[field] || "" }));
  };

  const toggleServicio = (servicio: string) => {
    setData((prev) => {
      const exists = prev.servicios.includes(servicio);
      return {
        ...prev,
        servicios: exists
          ? prev.servicios.filter((s) => s !== servicio)
          : [...prev.servicios, servicio],
      };
    });
    setErrors((prev) => ({ ...prev, servicios: "" }));
  };

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (step === 1) {
      if (!data.nombre.trim()) e.nombre = "Requerido";
      if (!data.email.trim()) {
        e.email = "Requerido";
      } else if (!emailRegex.test(data.email)) {
        e.email = "Ingresa un email válido";
      }
      if (!data.telefono.trim()) {
        e.telefono = "Requerido";
      } else if (!phoneRegex.test(data.telefono)) {
        e.telefono = "Ingresa un teléfono válido";
      }
    }
    if (step === 2) {
      if (data.servicios.length === 0) e.servicios = "Selecciona al menos un servicio";
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
    // TODO: integrar Resend cuando se configure el dominio
    setTimeout(() => {
      setStatus("ok");
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl p-8 md:p-10 relative overflow-hidden">
      {/* Form Content */}
      <div className={`transition-all duration-500 ease-in-out ${status === "ok" ? "opacity-0 scale-95 pointer-events-none absolute inset-0" : "opacity-100 scale-100"}`}>
        <p className="font-body text-xs uppercase tracking-wider text-gs-ink/30 mb-4">
          Paso {step} de 2 — {step === 1 ? "Datos personales" : "Cuéntanos tu proyecto"}
        </p>

        <div className="flex gap-2 mb-8">
          {[1, 2].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-colors ${
                s <= step ? "bg-gs-crimson" : "bg-gs-ink/10"
              }`}
            />
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-5">
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-gs-ink/40 block mb-1">Nombre *</label>
              <div className="relative">
                <input
                  type="text"
                  value={data.nombre}
                  onChange={(e) => update("nombre", e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full border border-gs-ink/10 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-gs-crimson transition-colors"
                />
                <span className={`absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${data.nombre.trim() && !errors.nombre ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"}`}>
                  <CheckSquare size={26} className="text-emerald-500" weight="Filled" />
                </span>
                <span className={`absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${errors.nombre ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"}`}>
                  <XSquare size={26} className="text-red-500" weight="Filled" />
                </span>
              </div>
              {errors.nombre && <span className="text-red-500 text-xs font-body">{errors.nombre}</span>}
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-gs-ink/40 block mb-1">Empresa</label>
              <div className="relative">
                <input
                  type="text"
                  value={data.empresa}
                  onChange={(e) => update("empresa", e.target.value)}
                  placeholder="Nombre de la empresa"
                  className="w-full border border-gs-ink/10 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-gs-crimson transition-colors"
                />
                <span className={`absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${data.empresa.trim() ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"}`}>
                  <CheckSquare size={26} className="text-emerald-500" weight="Filled" />
                </span>
              </div>
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-gs-ink/40 block mb-1">Email *</label>
              <div className="relative">
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="correo@empresa.cl"
                  className="w-full border border-gs-ink/10 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-gs-crimson transition-colors"
                />
                <span className={`absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${emailRegex.test(data.email) && !errors.email ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"}`}>
                  <CheckSquare size={26} className="text-emerald-500" weight="Filled" />
                </span>
                <span className={`absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${errors.email ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"}`}>
                  <XSquare size={26} className="text-red-500" weight="Filled" />
                </span>
              </div>
              {errors.email ? (
                <span className="text-red-500 text-xs font-body">{errors.email}</span>
              ) : (
                <span className="text-gs-ink/30 text-xs font-body">Ej: nombre@empresa.cl</span>
              )}
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-gs-ink/40 block mb-1">Teléfono *</label>
              <div className="relative">
                <input
                  type="tel"
                  value={data.telefono}
                  onChange={(e) => update("telefono", e.target.value)}
                  placeholder="+56 9 1234 5678"
                  className="w-full border border-gs-ink/10 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-gs-crimson transition-colors"
                />
                <span className={`absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${phoneRegex.test(data.telefono) && !errors.telefono ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"}`}>
                  <CheckSquare size={26} className="text-emerald-500" weight="Filled" />
                </span>
                <span className={`absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${errors.telefono ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"}`}>
                  <XSquare size={26} className="text-red-500" weight="Filled" />
                </span>
              </div>
              {errors.telefono ? (
                <span className="text-red-500 text-xs font-body">{errors.telefono}</span>
              ) : (
                <span className="text-gs-ink/30 text-xs font-body">Ej: +56 9 1234 5678</span>
              )}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-gs-ink/40 block mb-2">Servicios de interés *</label>
              <div className="relative">
                <div className="flex flex-wrap gap-2">
                  {serviciosList.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleServicio(s)}
                      className={`px-4 py-2 rounded-full text-sm font-body border transition-colors ${
                        data.servicios.includes(s)
                          ? "bg-gs-crimson text-white border-gs-crimson"
                          : "border-gs-ink/10 text-gs-ink/60 hover:border-gs-ink/30"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <span className={`absolute right-0 top-0 transition-all duration-200 ease-out ${data.servicios.length > 0 && !errors.servicios ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"}`}>
                  <CheckSquare size={26} className="text-emerald-500" weight="Filled" />
                </span>
                <span className={`absolute right-0 top-0 transition-all duration-200 ease-out ${errors.servicios ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"}`}>
                  <XSquare size={26} className="text-red-500" weight="Filled" />
                </span>
              </div>
              {errors.servicios && <span className="text-red-500 text-xs font-body">{errors.servicios}</span>}
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-gs-ink/40 block mb-2">Presupuesto estimado</label>
              <div className="relative">
                <div className="flex flex-wrap gap-2">
                  {presupuestos.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => update("presupuesto", p)}
                      className={`px-4 py-2 rounded-full text-sm font-body border transition-colors ${
                        data.presupuesto === p
                          ? "bg-gs-ink text-white border-gs-ink"
                          : "border-gs-ink/10 text-gs-ink/60 hover:border-gs-ink/30"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
                <span className={`absolute right-0 top-0 transition-all duration-200 ease-out ${data.presupuesto ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"}`}>
                  <CheckSquare size={26} className="text-emerald-500" weight="Filled" />
                </span>
              </div>
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-gs-ink/40 block mb-1">Cuéntanos qué necesitas *</label>
              <div className="relative">
                <textarea
                  value={data.mensaje}
                  onChange={(e) => update("mensaje", e.target.value)}
                  rows={4}
                  placeholder="Describe brevemente tu requerimiento..."
                  className="w-full border border-gs-ink/10 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-gs-crimson resize-none transition-colors"
                />
                <span className={`absolute right-3 top-3 transition-all duration-200 ease-out ${data.mensaje.trim() && !errors.mensaje ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"}`}>
                  <CheckSquare size={26} className="text-emerald-500" weight="Filled" />
                </span>
                <span className={`absolute right-3 top-3 transition-all duration-200 ease-out ${errors.mensaje ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"}`}>
                  <XSquare size={26} className="text-red-500" weight="Filled" />
                </span>
              </div>
              {errors.mensaje && <span className="text-red-500 text-xs font-body">{errors.mensaje}</span>}
            </div>
          </div>
        )}

        {/* Honeypot */}
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

        <div className="flex justify-between mt-8">
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

          {step < 2 ? (
            <button
              type="button"
              onClick={next}
              className="bg-gs-crimson text-white px-8 py-3 rounded-xl font-body text-sm uppercase tracking-wider hover:bg-gs-crimson/90 transition-colors"
            >
              Siguiente
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="bg-gs-crimson text-white px-8 py-3 rounded-xl font-body text-sm uppercase tracking-wider hover:bg-gs-crimson/90 transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Enviando..." : "Enviar"}
            </button>
          )}
        </div>

        {status === "error" && (
          <p className="text-red-500 text-xs font-body mt-3">Error al enviar. Intenta nuevamente.</p>
        )}
      </div>

      {/* Success Content */}
      <div className={`transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center min-h-[400px] ${status === "ok" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none absolute inset-0"}`}>
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6" style={{ animation: status === "ok" ? "iconScale 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards" : "none" }}>
          <svg width="36" height="36" fill="none" stroke="#16a34a" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-display font-normal text-2xl text-gs-ink mb-3" style={{ animation: status === "ok" ? "fadeInUp 0.5s ease-out 0.3s both" : "none" }}>Mensaje enviado</h3>
        <p className="font-body text-sm text-gs-ink/50" style={{ animation: status === "ok" ? "fadeInUp 0.5s ease-out 0.5s both" : "none" }}>Te contactaremos en menos de 24 horas.</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl border border-gs-ink/15 text-gs-ink/60 font-body text-sm hover:bg-gs-ink/5 hover:text-gs-ink transition-colors"
          style={{ animation: status === "ok" ? "fadeInUp 0.5s ease-out 0.7s both" : "none" }}
        >
          <Home size={14} />
          Volver al inicio
        </a>
      </div>

      <style>{`
        @keyframes iconScale {
          0% { transform: scale(0) rotate(-10deg); opacity: 0; }
          60% { transform: scale(1.3) rotate(5deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { transform: translateY(15px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
