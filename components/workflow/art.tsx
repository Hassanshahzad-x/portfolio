// One small illustration per workflow node, drawn in code on a 96 x 72 board.
// House style: 1.5 strokes in the node's ink, rounded joins, flat pastel fills. Colors come from CSS variables
// set per node (see .wf-node in globals.css), so one drawing works in both themes. Class names:
//   p paper fill · t tint fill · m mid fill · i solid ink (no stroke) · d dashed · ps paper stroke · o half opacity
// Parts that move when the node is active carry a wf-* motion class; nothing moves while idle.

type P = { x: number; y: number; s?: number; c?: string };

// A person, feet at (x, y).
const Person = ({ x, y, s = 1, c = "p" }: P) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <circle cy={-14} r={6} className={c} />
    <path d="M-11 7v-3a11 10 0 0 1 22 0v3z" className={c} />
  </g>
);

// A sheet of paper with a folded corner and a few text lines.
const Sheet = ({ x, y, w, h, lines = 3, c = "p" }: { x: number; y: number; w: number; h: number; lines?: number; c?: string }) => (
  <g>
    <path d={`M${x} ${y}h${w - 7}l7 7v${h - 7}h${-w}z`} className={c} />
    <path d={`M${x + w - 7} ${y}v7h7`} />
    {Array.from({ length: lines }, (_, i) => (
      <path key={i} d={`M${x + 5} ${y + 13 + i * 7}h${i === lines - 1 ? (w - 10) * 0.6 : w - 12}`} className="o" />
    ))}
  </g>
);

// The AI mark: a four-point spark.
const Spark = ({ x, y, s = 1 }: P) => (
  <path
    transform={`translate(${x} ${y}) scale(${s})`}
    d="M0-7C1-2 2-1 7 0 2 1 1 2 0 7-1 2-2 1-7 0-2-1-1-2 0-7z"
    className="i wf-pulse"
  />
);

const Check = ({ x, y, s = 1 }: P) => <path transform={`translate(${x} ${y}) scale(${s})`} d="M-4 0l3 3 5-6" className="wf-tick" />;

const Bars = ({ x, y, h }: { x: number; y: number; h: number[] }) => (
  <g className="wf-wave">
    {h.map((v, i) => (
      <path key={i} d={`M${x + i * 6} ${y - v / 2}v${v}`} style={{ animationDelay: `${i * 90}ms` }} strokeWidth={2.5} />
    ))}
  </g>
);

const Wheel = ({ x, y }: P) => (
  <g>
    <circle cx={x} cy={y} r={5.5} className="p" />
    <circle cx={x} cy={y} r={1.8} className="i" />
  </g>
);

const art = {
  // ---------- Folklore ----------
  elder: () => (
    <>
      <rect x={26} y={18} width={44} height={40} rx={10} className="m" />
      <Person x={48} y={56} s={1.1} />
      <path d="M44.5 41.5h1M50.5 41.5h1" strokeWidth={2.2} />
      <rect x={18} y={40} width={12} height={22} rx={5} className="t" />
      <rect x={66} y={40} width={12} height={22} rx={5} className="t" />
      <rect x={24} y={55} width={48} height={8} rx={3} className="t" />
      <g className="wf-float">
        <path d="M70 6h16a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4H78l-4 4v-4h-4a4 4 0 0 1-4-4v-9a4 4 0 0 1 4-4z" className="p" />
        <path d="M78 11.5c-1-2-4-1.5-4 .8 0 2 4 4.4 4 4.4s4-2.4 4-4.4c0-2.3-3-2.8-4-.8z" className="i" />
      </g>
    </>
  ),
  interview: () => (
    <>
      <Bars x={12} y={34} h={[8, 16, 24, 12]} />
      <Bars x={66} y={34} h={[14, 22, 10, 18]} />
      <rect x={39} y={8} width={18} height={30} rx={9} className="p" />
      <path d="M43 18h10M43 24h10M43 30h10" className="o" />
      <path d="M33 28v3a15 15 0 0 0 30 0v-3M48 46v10M38 58h20" />
    </>
  ),
  vault: () => (
    <>
      <g className="wf-float">
        <g transform="rotate(-9 33 24)">
          <rect x={22} y={10} width={22} height={28} rx={2} className="p" />
          <path d="M26 18h14M26 23h14M26 28h9" className="o" />
        </g>
        <rect x={38} y={6} width={22} height={28} rx={2} className="p" />
        <circle cx={44} cy={13} r={2.5} className="m" />
        <path d="M40 26l6-6 5 5 3-3 5 5" />
        <g transform="rotate(9 64 24)">
          <rect x={54} y={10} width={22} height={28} rx={2} className="p" />
          <path d="M58 18h14M58 23h14M58 28h9" className="o" />
        </g>
      </g>
      <path d="M18 36h60v24a4 4 0 0 1-4 4H22a4 4 0 0 1-4-4z" className="m" />
      <rect x={14} y={30} width={68} height={10} rx={3} className="t" />
      <rect x={40} y={47} width={16} height={8} rx={2} className="p" />
    </>
  ),
  recall: () => (
    <>
      <Sheet x={12} y={10} w={40} h={50} lines={5} />
      <rect x={16} y={28} width={26} height={6} rx={2} className="m" />
      <circle cx={58} cy={40} r={14} className="p" />
      <path d="M52 40h12M52 45h8" className="o" />
      <path d="M68 50l12 12" strokeWidth={4} />
      <Spark x={80} y={16} />
    </>
  ),
  ask: () => (
    <>
      <Person x={26} y={63} s={0.9} c="t" />
      <Person x={46} y={64} s={1.05} />
      <g className="wf-float">
        <path d="M56 8h28a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H70l-6 6v-6h-8a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z" className="m" />
        <path d="M66 16a4 4 0 1 1 5.5 3.7c-1.3.5-1.5 1.3-1.5 2.8" className="ps" strokeWidth={2} />
        <circle cx={70} cy={27} r={1.3} className="i" style={{ fill: "var(--paper)" }} />
      </g>
    </>
  ),
  clone: () => (
    <>
      <Bars x={10} y={36} h={[10, 20, 28, 14, 22]} />
      <path d="M42 30l6 6-6 6" />
      <circle cx={70} cy={36} r={21} className="p" />
      <g className="wf-pulse">
        <path d="M62 44a10 10 0 0 1 16-12" />
        <path d="M58 40a14 14 0 0 1 23-12" className="o" />
        <path d="M66 46a5 5 0 0 1 8-6M70 52c2-3 3-6 3-10" />
        <path d="M80 36c0 6-2 11-5 15" className="o" />
      </g>
    </>
  ),
  voice: () => (
    <>
      <path d="M12 28h10l14-12v40L22 44H12z" className="p" />
      <g className="wf-pulse">
        <path d="M44 28a12 12 0 0 1 0 16" />
        <path d="M50 22a20 20 0 0 1 0 28" className="o" style={{ animationDelay: "120ms" }} />
      </g>
      <path d="M62 14h24a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4h-8l-6 6v-6H62a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4z" className="m" />
      <path d="M64 23h18M64 30h12" className="ps" />
    </>
  ),

  // ---------- Outersuite ----------
  contractor: () => (
    <>
      <rect x={56} y={16} width={28} height={46} rx={2} className="t" />
      {[22, 32, 42].map((y) => (
        <g key={y}>
          <rect x={61} y={y} width={7} height={6} rx={1} className="p" />
          <rect x={72} y={y} width={7} height={6} rx={1} className="p" />
        </g>
      ))}
      <rect x={66} y={52} width={8} height={10} className="m" />
      <Person x={32} y={63} s={1.2} />
      <path d="M24.5 44a8 8 0 0 1 15 0z" className="m" />
      <path d="M22 44h20" strokeWidth={2} />
    </>
  ),
  blueprints: () => (
    <>
      <rect x={22} y={8} width={58} height={44} rx={2} className="t" transform="rotate(5 51 30)" />
      <rect x={14} y={14} width={60} height={46} rx={2} className="p" />
      <path d="M14 26h60M14 38h60M14 50h60M26 14v46M38 14v46M50 14v46M62 14v46" className="o" strokeWidth={0.6} />
      <path d="M22 22h26v14H36v16H22zM48 22h18v30H36" />
      <circle cx={29} cy={29} r={2} className="i" />
      <path d="M74 54a6 6 0 1 0 0 8h8" className="m" />
    </>
  ),
  measure: () => (
    <>
      <path d="M20 10h50M20 7v6M70 7v6M80 18v40M77 18h6M77 58h6" />
      <rect x={20} y={18} width={50} height={40} rx={1} className="p" />
      <path d="M44 18v18M20 36h34M58 36v22" />
      {[
        [30, 27],
        [62, 27],
        [30, 48],
        [66, 48],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={2.3} className="m" />
      ))}
      <rect x={20} y={20} width={50} height={2} className="i wf-scan" opacity={0.5} />
    </>
  ),
  property: () => (
    <>
      <rect x={8} y={8} width={64} height={56} rx={3} className="t" />
      <path d="M8 22h64M8 36h64M8 50h64M24 8v56M40 8v56M56 8v56" className="o" strokeWidth={0.6} />
      <rect x={14} y={14} width={52} height={44} rx={1} className="d" />
      <path d="M22 20h26v12h10v20H22z" className="m" />
      {[
        [28, 27],
        [38, 33],
        [30, 44],
        [46, 46],
        [52, 40],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={1.3} className="i wf-pulse" />
      ))}
      <path d="M84 16v40M80 16h8M80 56h8M84 16l-3 4M84 16l3 4" />
      <rect x={78} y={30} width={12} height={10} rx={2} className="p" />
    </>
  ),
  estimate: () => (
    <>
      <Sheet x={14} y={8} w={50} h={56} lines={0} />
      {[20, 28, 36, 44].map((y) => (
        <g key={y}>
          <path d={`M19 ${y}h22`} className="o" />
          <rect x={46} y={y - 2.5} width={12} height={5} rx={1.5} className="m" />
        </g>
      ))}
      <path d="M19 54h39" strokeWidth={2.5} />
      <circle cx={74} cy={48} r={12} className="t" />
      <path d="M74 41v14M77.5 44c-1-1.6-7-1.6-7 1 0 3 7 1.6 7 4.6 0 2.6-6 2.6-7 1" />
    </>
  ),
  estimator: () => (
    <>
      <Person x={26} y={63} s={1.15} />
      <rect x={48} y={12} width={36} height={52} rx={3} className="p" />
      <rect x={58} y={8} width={16} height={8} rx={2} className="m" />
      {[26, 38].map((y) => (
        <g key={y}>
          <rect x={53} y={y - 4} width={8} height={8} rx={1.5} className="t" />
          <Check x={57} y={y} s={0.8} />
          <path d={`M65 ${y}h14`} className="o" />
        </g>
      ))}
      <rect x={53} y={46} width={8} height={8} rx={1.5} className="t" />
      <circle cx={57} cy={50} r={1.6} className="i wf-pulse" />
      <path d="M65 50h10" className="o" />
    </>
  ),
  proposal: () => (
    <>
      <rect x={16} y={30} width={64} height={32} rx={2} className="t" />
      <g className="wf-float">
        <Sheet x={24} y={10} w={48} h={40} lines={3} />
      </g>
      <path d="M16 30l32 20 32-20v30a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2z" className="m" />
      <circle cx={48} cy={50} r={5} className="i" />
    </>
  ),

  // ---------- Voyajur ----------
  channels: () => (
    <>
      {[0, 1, 2, 3].map((i) => (
        <g key={i} className="wf-float" style={{ animationDelay: `${i * 80}ms` }}>
          <rect x={10 + i * 10} y={8 + i * 12} width={46} height={20} rx={4} className={i === 3 ? "m" : "p"} />
          <circle cx={18 + i * 10} cy={18 + i * 12} r={3} className="i" />
          <path d={`M25 ${15 + i * 12}h${22}M25 ${21 + i * 12}h14`} transform={`translate(${i * 10} 0)`} className="o" />
        </g>
      ))}
    </>
  ),
  queue: () => (
    <>
      <path d="M8 52h76" />
      {[16, 34, 52, 70].map((x) => (
        <circle key={x} cx={x} cy={57} r={3.5} className="p" />
      ))}
      <g className="wf-slide">
        {[12, 32, 52].map((x, i) => (
          <g key={x}>
            <rect x={x} y={30} width={16} height={20} rx={2} className={i === 2 ? "m" : "p"} />
            <path d={`M${x + 4} 37h8M${x + 4} 42h5`} className="o" />
          </g>
        ))}
      </g>
      <path d="M76 34l8 6-8 6" />
      <path d="M14 18h40" className="d" />
      <circle cx={60} cy={18} r={5} className="t" />
      <path d="M60 15.5v3l1.8 1.5" />
    </>
  ),
  calendar: () => (
    <>
      <rect x={16} y={14} width={64} height={50} rx={4} className="p" />
      <path d="M16 18a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4v8H16z" className="m" />
      <path d="M30 9v9M66 9v9" strokeWidth={2.5} />
      <path d="M16 36h64M16 46h64M16 56h64M32 26v38M48 26v38M64 26v38" className="o" strokeWidth={0.6} />
      <g className="wf-pop">
        <rect x={20} y={29} width={36} height={5} rx={2.5} className="m" />
        <rect x={42} y={39} width={34} height={5} rx={2.5} className="i" opacity={0.6} />
        <rect x={20} y={49} width={26} height={5} rx={2.5} className="t" />
        <rect x={52} y={59} width={24} height={3} rx={1.5} className="m" />
      </g>
    </>
  ),
  host: () => (
    <>
      <path d="M14 36l24-20 24 20v26H14z" className="p" />
      <path d="M10 39l28-24 28 24" strokeWidth={2} />
      <rect x={32} y={44} width={12} height={18} rx={1} className="m" />
      <rect x={20} y={38} width={8} height={8} rx={1} className="t" />
      <rect x={48} y={38} width={8} height={8} rx={1} className="t" />
      <g className="wf-float">
        <circle cx={78} cy={26} r={8} className="m" />
        <circle cx={78} cy={26} r={2.5} className="p" />
        <path d="M78 34v24M78 48h5M78 54h4" strokeWidth={2} />
      </g>
    </>
  ),
  guest: () => (
    <>
      <Person x={36} y={63} s={1.2} />
      <path d="M62 38v-5h12v5" />
      <rect x={56} y={38} width={24} height={22} rx={3} className="m" />
      <path d="M63 38v22M73 38v22" className="ps" />
      <circle cx={60} cy={63} r={1.8} className="i" />
      <circle cx={76} cy={63} r={1.8} className="i" />
      <path d="M8 18l10 4 8-3 4 1-6 3 6 6-3 1-7-4-6 1" className="t" />
    </>
  ),
  payment: () => (
    <>
      <rect x={10} y={16} width={58} height={38} rx={5} className="m" />
      <rect x={10} y={24} width={58} height={7} className="i" opacity={0.75} />
      <rect x={16} y={36} width={10} height={8} rx={2} className="p" />
      <path d="M32 40h14M16 48h22" className="ps" />
      <g className="wf-pop">
        <circle cx={70} cy={50} r={13} className="p" />
        <Check x={70} y={51} s={1.4} />
      </g>
    </>
  ),

  // ---------- Vynsite ----------
  dealerA: () => (
    <>
      <rect x={16} y={28} width={64} height={34} className="p" />
      <rect x={12} y={22} width={72} height={9} rx={2} className="m" />
      <path d="M24 22v9M36 22v9M48 22v9M60 22v9M72 22v9" className="ps" />
      <rect x={22} y={36} width={34} height={20} rx={1} className="t" />
      <rect x={62} y={38} width={12} height={24} className="m" />
      <rect x={36} y={6} width={24} height={13} rx={3} className="i" />
      <path d="M44.5 16l3.5-7 3.5 7M45.7 13.6h4.6" className="ps" />
      <path d="M26 52l4-6h12l4 6" className="o" />
    </>
  ),
  dealerB: () => (
    <>
      <path d="M14 34l34-18 34 18v28H14z" className="p" />
      <path d="M10 36l38-20 38 20" strokeWidth={2} />
      <rect x={22} y={40} width={22} height={16} rx={1} className="t" />
      <rect x={52} y={40} width={22} height={16} rx={1} className="t" />
      <path d="M48 16V4l10 3-10 3" className="m" />
      <circle cx={48} cy={30} r={6} className="i" />
      <path d="M46.5 27.2v5.6h2.2a1.4 1.4 0 0 0 0-2.8h-2.2 2a1.4 1.4 0 0 0 0-2.8z" className="ps" strokeWidth={1.1} />
    </>
  ),
  shield: () => (
    <>
      <path d="M44 6l24 8v16c0 16-10 26-24 32-14-6-24-16-24-32V14z" className="p" />
      <Person x={44} y={42} s={0.75} c="m" />
      <g className="wf-pop">
        <circle cx={58} cy={46} r={7} className="i" />
        <Check x={58} y={46} s={0.9} />
      </g>
      <rect x={74} y={30} width={14} height={26} rx={3} className="t" />
      <path d="M77.5 40h1M81 40h1M84.5 40h1" strokeWidth={2.2} className="wf-blink" />
      <path d="M8 22h8M8 30h6M8 38h8" className="o" />
    </>
  ),
  platform: () => (
    <>
      <rect x={24} y={8} width={48} height={56} rx={4} className="p" />
      {[14, 30, 46].map((y, i) => (
        <g key={y}>
          <rect x={29} y={y} width={18} height={12} rx={2} className={i % 2 ? "t" : "m"} />
          <rect x={49} y={y} width={18} height={12} rx={2} className={i % 2 ? "m" : "t"} />
          <circle cx={42} cy={y + 6} r={1.4} className="i wf-blink" style={{ animationDelay: `${i * 150}ms` }} />
        </g>
      ))}
      <path d="M48 12v48" className="d" />
      <path d="M10 30h10M76 30h10M10 46h10M76 46h10" className="o" />
    </>
  ),
  cars: () => (
    <>
      <path d="M8 54v-8l9-11h30l10 11h8a4 4 0 0 1 4 4v4z" className="p" />
      <path d="M20 37h11v9H13zM35 37h10l7 9H35z" className="t" />
      <Wheel x={21} y={55} />
      <Wheel x={57} y={55} />
      <g className="wf-float">
        <rect x={58} y={6} width={32} height={24} rx={3} className="m" />
        <circle cx={66} cy={15} r={3.5} className="p" />
        <path d="M60.5 25a5.5 5 0 0 1 11 0" className="ps" />
        <path d="M75 13h10M75 19h7" className="ps" />
      </g>
    </>
  ),
  providers: () => (
    <>
      <path d="M10 14h30l6 9-6 9H10z" className="p" />
      <circle cx={40} cy={23} r={1.8} />
      <path d="M15 18v10M18 18v10M22 18v10M24 18v10M28 18v10M31 18v10" strokeWidth={1.2} />
      <path d="M54 40a16 16 0 0 1 32 0z" className="t" />
      <path d="M58 40a12 12 0 0 1 24 0" className="d" />
      <path d="M70 40l7-9" strokeWidth={2} className="wf-spin" style={{ transformOrigin: "70px 40px" }} />
      <circle cx={70} cy={40} r={2} className="i" />
      <path d="M32 66c-7-9-10-12-10-17a10 10 0 0 1 20 0c0 5-3 8-10 17z" className="m" />
      <circle cx={32} cy={49} r={3.5} className="p" />
    </>
  ),
  carPicks: () => (
    <>
      <path d="M22 50v-10l6-12h32l6 12v10z" className="p" />
      <path d="M30 30h28l4 9H26z" className="t" />
      <circle cx={30} cy={44} r={3} className="m" />
      <circle cx={58} cy={44} r={3} className="m" />
      <rect x={24} y={50} width={8} height={8} rx={2} className="i" />
      <rect x={56} y={50} width={8} height={8} rx={2} className="i" />
      <Spark x={74} y={18} s={1.1} />
      <Spark x={84} y={34} s={0.6} />
      <path d="M12 16c-1-2-4-1.5-4 .8 0 2 4 4.4 4 4.4s4-2.4 4-4.4c0-2.3-3-2.8-4-.8z" className="m" />
    </>
  ),

  // ---------- Hilo ATOS ----------
  hangar: () => (
    <>
      <path d="M8 62V40a40 28 0 0 1 80 0v22z" className="m" />
      <path d="M18 62V44a30 20 0 0 1 60 0v18z" className="p" />
      <path d="M8 62h80" strokeWidth={2} />
      <g className="wf-float">
        <path d="M48 28l2.5 9 13 5v3l-13-3-1 7 4 3v2l-5.5-1.6L42.5 54v-2l4-3-1-7-13 3v-3l13-5z" className="i" />
      </g>
    </>
  ),
  portable: () => (
    <>
      <path d="M14 36a8 8 0 0 1 3-15 11 11 0 0 1 21-3 8 8 0 0 1 3 18z" className="p" />
      <rect x={58} y={26} width={26} height={34} rx={3} className="m" />
      <path d="M62 34h18M62 42h18M62 50h18" className="ps" />
      <circle cx={78} cy={56} r={1.2} className="i" />
      <g className="wf-pulse">
        <path d="M42 22c8-6 16-4 20 2M58 20l4 4 1-5" />
        <path d="M54 52c-8 6-16 4-20-2M38 54l-4-4-1 5" />
      </g>
      <path d="M14 50a8 4 0 0 0 16 0v8a8 4 0 0 1-16 0zM14 50a8 4 0 0 1 16 0" className="t" />
    </>
  ),
  schedule: () => (
    <>
      <rect x={10} y={14} width={64} height={50} rx={4} className="p" />
      <path d="M10 18a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4v8H10z" className="m" />
      <path d="M10 39h64M10 52h64M26 26v38M42 26v38M58 26v38" className="o" strokeWidth={0.6} />
      <g className="wf-pop">
        <rect x={12} y={28} width={28} height={9} rx={2} className="t" />
        <path d="M22 32.5l2 0 4-2.5 1 .5-2 2.5h4l1-1h1l-1 2 1 2h-1l-1-1h-4l2 2.5-1 .5-4-2.5h-2z" className="i" />
        <rect x={44} y={41} width={28} height={9} rx={2} className="m" />
        <rect x={28} y={54} width={28} height={8} rx={2} className="t" />
      </g>
      <Spark x={82} y={14} s={1.1} />
    </>
  ),
  mailCal: () => (
    <>
      <rect x={40} y={10} width={44} height={42} rx={4} className="p" />
      <path d="M40 14a4 4 0 0 1 4-4h36a4 4 0 0 1 4 4v6H40z" className="m" />
      <path d="M40 30h44M40 40h44M55 20v32M70 20v32" className="o" strokeWidth={0.6} />
      <rect x={57} y={32} width={11} height={6} rx={1.5} className="i" opacity={0.6} />
      <g className="wf-float">
        <rect x={10} y={32} width={44} height={30} rx={3} className="t" />
        <path d="M10 35l22 15 22-15" />
      </g>
    </>
  ),
  records: () => (
    <>
      <path d="M10 22h22l5 5h33a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3z" className="m" />
      <rect x={20} y={10} width={40} height={44} rx={2} className="p" />
      {[20, 30, 40].map((y) => (
        <g key={y}>
          <rect x={24} y={y - 3} width={6} height={6} rx={1.2} className="t" />
          <Check x={27} y={y} s={0.6} />
          <path d={`M34 ${y}h20`} className="o" />
        </g>
      ))}
      <path d="M70 8v18a4 4 0 0 1-8 0V12a2.5 2.5 0 0 1 5 0v13" />
    </>
  ),
  faa: () => (
    <>
      <Sheet x={16} y={8} w={46} h={56} lines={0} />
      <path d="M24 18l4 1 8-4 2 1-5 4h7l2-2h2l-2 3 2 3h-2l-2-2h-7l5 4-2 1-8-4-4 1z" className="m" />
      <path d="M22 34h32M22 41h32M22 48h20" className="o" />
      <path d="M62 58l-4 10 6-3 4 5 1-11M72 58l3 11 2-5 6 2-5-9" className="t" />
      <circle cx={68} cy={52} r={11} className="m" />
      <path d="M68 45.5l1.9 4 4.3.4-3.2 2.9 1 4.2-4-2.3-4 2.3 1-4.2-3.2-2.9 4.3-.4z" className="i wf-pulse" />
    </>
  ),
  connect: () => (
    <>
      <rect x={28} y={8} width={40} height={26} rx={4} className="m" />
      <rect x={28} y={14} width={40} height={5} className="i" opacity={0.7} />
      <path d="M34 26h12" className="ps" />
      <g className="wf-flowdash">
        <path d="M48 34v8c0 6-26 2-26 8v2M48 42c0 6 26 2 26 8v2" className="d" />
      </g>
      <circle cx={22} cy={58} r={9} className="p" />
      <circle cx={74} cy={58} r={9} className="p" />
      {[22, 74].map((x) => (
        <path key={x} d={`M${x} 52.5v11M${x + 2.6} 55.2c-.8-1.3-5.2-1.3-5.2.6 0 2.2 5.2 1.1 5.2 3.4 0 1.9-4.5 1.9-5.3.6`} />
      ))}
    </>
  ),

  // ---------- Wordley ----------
  paste: () => (
    <>
      <rect x={20} y={12} width={52} height={52} rx={4} className="p" />
      <rect x={36} y={7} width={20} height={9} rx={2.5} className="m" />
      <path d="M27 26h38M27 33h38M27 40h38M27 47h22" className="o" />
      <rect x={51} y={43} width={2} height={8} className="i wf-blink" />
      <path d="M78 22l6-6M80 30h8M78 38l6 6" className="t" strokeWidth={2} />
    </>
  ),
  lens: () => (
    <>
      <Sheet x={10} y={8} w={46} h={56} lines={0} />
      <rect x={15} y={20} width={30} height={5} rx={2} className="m" />
      <path d="M15 31h34M15 38h34" className="o" />
      <rect x={15} y={43} width={22} height={5} rx={2} className="t" />
      <path d="M15 54h28" className="o" />
      <circle cx={60} cy={40} r={14} className="p" opacity={0.92} />
      <path d="M53 38h12M53 43h8" className="m" strokeWidth={3} />
      <path d="M70 50l12 12" strokeWidth={4} />
      <Spark x={80} y={16} />
    </>
  ),
  gauge: () => (
    <>
      <path d="M16 50a32 32 0 0 1 12-25" strokeWidth={8} className="o" />
      <path d="M32 22a32 32 0 0 1 32 0" strokeWidth={8} opacity={0.6} />
      <path d="M68 25a32 32 0 0 1 12 25" strokeWidth={8} />
      <path d="M48 50l14-18" strokeWidth={2.5} className="wf-spin" style={{ transformOrigin: "48px 50px" }} />
      <circle cx={48} cy={50} r={4} className="i" />
      <path d="M38 62h20" className="o" />
    </>
  ),
  tone: () => (
    <>
      <path d="M14 10h64a6 6 0 0 1 6 6v28a6 6 0 0 1-6 6H40l-10 10V50H14a6 6 0 0 1-6-6V16a6 6 0 0 1 6-6z" className="p" />
      <Bars x={24} y={30} h={[8, 16, 24, 14, 20, 10, 6, 14]} />
    </>
  ),
  emotion: () => (
    <>
      <circle cx={20} cy={38} r={11} className="t" />
      <path d="M16 36v1M24 36v1M15 42a6 5 0 0 0 10 0" />
      <g className="wf-pop">
        <circle cx={48} cy={36} r={15} className="m" />
        <path d="M43 33v1.5M53 33v1.5M41 41a8 7 0 0 0 14 0" strokeWidth={2} />
      </g>
      <circle cx={76} cy={38} r={11} className="t" />
      <path d="M72 36v1M80 36v1M71 45a6 5 0 0 1 10 0" />
      <path d="M14 60h68" className="d" />
    </>
  ),
  summary: () => (
    <>
      <rect x={8} y={8} width={32} height={56} rx={2} className="t" />
      <path d="M13 16h22M13 22h22M13 28h22M13 34h22M13 40h22M13 46h22M13 52h14" className="o" strokeWidth={1} />
      <path d="M44 30l6 6-6 6" />
      <g className="wf-pop">
        <Sheet x={56} y={20} w={32} h={34} lines={0} />
        <rect x={60} y={31} width={22} height={5} rx={2} className="m" />
        <path d="M61 42h20M61 48h12" className="o" />
      </g>
    </>
  ),
  entities: () => (
    <>
      <rect x={8} y={8} width={48} height={16} rx={8} className="m" />
      <circle cx={17} cy={14} r={2.5} className="p" />
      <path d="M13 21a4 3 0 0 1 8 0" className="ps" />
      <path d="M26 16h22" className="ps" />
      <rect x={30} y={29} width={52} height={16} rx={8} className="p" />
      <path d="M40 41c-3-4-4.5-5.5-4.5-7.5a4.5 4.5 0 0 1 9 0c0 2-1.5 3.5-4.5 7.5z" className="m" />
      <path d="M50 37h24" className="o" />
      <g className="wf-pop">
        <rect x={14} y={50} width={46} height={16} rx={8} className="t" />
        <path d="M21 62v-7h8v7M24 58h2" />
        <path d="M34 58h20" className="o" />
      </g>
    </>
  ),

  // ---------- Recaller ----------
  upload: () => (
    <>
      <g className="wf-float">
        <g transform="rotate(-8 34 22)">
          <Sheet x={20} y={4} w={26} h={32} lines={2} />
        </g>
        <g transform="rotate(7 60 22)">
          <Sheet x={46} y={6} w={26} h={32} lines={2} c="t" />
        </g>
      </g>
      <path d="M8 46h20l4 8h32l4-8h20v14a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4z" className="m" />
      <path d="M48 36v12M43 43l5 5 5-5" className="ps" strokeWidth={2} />
    </>
  ),
  vectors: () => (
    <>
      <path d="M12 62V10M12 62h72" />
      {[
        [26, 22], [32, 28], [24, 32], [34, 20],
        [56, 46], [62, 40], [66, 50], [58, 54],
        [70, 18], [76, 24],
        [40, 48], [22, 50],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={3} className={i < 4 ? "i" : i < 8 ? "m" : "t"} />
      ))}
      <circle cx={29} cy={26} r={11} className="d wf-pulse" />
    </>
  ),
  question: () => (
    <>
      <Person x={28} y={63} s={1.2} />
      <g className="wf-float">
        <path d="M50 8h32a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H64l-8 7v-7h-6a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z" className="m" />
        <path d="M61 17a4.5 4.5 0 1 1 6 4.2c-1.4.6-1.6 1.4-1.6 3" className="ps" strokeWidth={2} />
        <circle cx={65.4} cy={28.5} r={1.4} style={{ fill: "var(--paper)" }} />
      </g>
    </>
  ),
  search: () => (
    <>
      {[
        [14, 18], [22, 54], [80, 16], [84, 46], [70, 62], [12, 40],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={2.5} className="t" />
      ))}
      <circle cx={44} cy={34} r={18} className="p" />
      {[
        [38, 30], [46, 26], [50, 36], [40, 40],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={3} className="i wf-pulse" style={{ animationDelay: `${i * 100}ms` }} />
      ))}
      <path d="M57 47l14 14" strokeWidth={4.5} />
    </>
  ),
  answer: () => (
    <>
      <path d="M14 8h56a5 5 0 0 1 5 5v24a5 5 0 0 1-5 5H34l-8 8v-8H14a5 5 0 0 1-5-5V13a5 5 0 0 1 5-5z" className="p" />
      <path d="M17 18h48M17 25h48M17 32h30" className="o" />
      <rect x={40} y={50} width={20} height={14} rx={3} className="m" />
      <rect x={64} y={50} width={20} height={14} rx={3} className="t" />
      <path d="M45 55h10M45 59h6M69 55h10M69 59h6" className="ps" />
      <Spark x={84} y={14} s={0.9} />
    </>
  ),
  digest: () => (
    <>
      {[6, 12, 18].map((y, i) => (
        <rect key={y} x={22 + i * 3} y={y} width={52 - i * 6} height={5} rx={1.5} className={i === 2 ? "m" : "t"} />
      ))}
      <path d="M16 26h64L56 46v8H40v-8z" className="p" />
      <path d="M30 32h36M38 38h20" className="o" />
      <g className="wf-pop">
        <rect x={32} y={56} width={32} height={12} rx={3} className="m" />
        <path d="M37 62h22" className="ps" />
      </g>
    </>
  ),

  // ---------- Safelinks ----------
  sharer: () => (
    <>
      <Person x={28} y={63} s={1.2} />
      <Sheet x={50} y={10} w={26} h={32} lines={3} />
      <path d="M62 50c8 6 16 6 22-2M78 46l6 2 1-6" strokeWidth={2} className="wf-pulse" />
    </>
  ),
  forge: () => (
    <>
      <rect x={12} y={26} width={34} height={18} rx={9} className="p" transform="rotate(-25 29 35)" strokeWidth={3} />
      <rect x={36} y={22} width={34} height={18} rx={9} className="m" transform="rotate(-25 53 31)" strokeWidth={3} />
      <g className="wf-pop">
        <rect x={52} y={48} width={36} height={16} rx={4} className="t" />
        <path d="M58 56h1M64 56h1M70 56h1M76 56h1M82 56h1" strokeWidth={2.6} />
      </g>
      <Spark x={18} y={14} s={0.9} />
    </>
  ),
  timer: () => (
    <>
      <rect x={42} y={6} width={12} height={6} rx={2} className="m" />
      <path d="M48 12v4M66 18l4-4" />
      <circle cx={48} cy={40} r={24} className="p" />
      <path d="M48 16a24 24 0 0 1 22 31" strokeWidth={5} className="o" />
      <path d="M48 40V24" strokeWidth={2.4} className="wf-spin" style={{ transformOrigin: "48px 40px" }} />
      <circle cx={48} cy={40} r={2.5} className="i" />
      {[0, 90, 180, 270].map((a) => (
        <path key={a} d="M48 19v3" transform={`rotate(${a} 48 40)`} />
      ))}
    </>
  ),
  link: () => (
    <>
      <rect x={8} y={20} width={80} height={22} rx={11} className="p" />
      <g transform="translate(20 31)">
        <path d="M-2-3l-2-2a3.5 3.5 0 0 0-5 5l2 2M2 3l2 2a3.5 3.5 0 0 0 5-5l-2-2M-2 2l4-4" />
      </g>
      <path d="M34 31h34" className="o" />
      <g className="wf-pop">
        <circle cx={74} cy={50} r={12} className="m" />
        <rect x={69} y={49} width={10} height={8} rx={1.5} className="i" />
        <path d="M71 49v-2.5a3 3 0 0 1 6 0V49" />
      </g>
    </>
  ),
  keyhole: () => (
    <>
      <rect x={48} y={8} width={36} height={56} rx={6} className="p" />
      <circle cx={66} cy={30} r={6} className="i" />
      <path d="M63 34l-3 14h12l-3-14z" className="i" />
      <g className="wf-slide">
        <circle cx={16} cy={36} r={8} className="m" />
        <circle cx={16} cy={36} r={3} className="p" />
        <path d="M24 36h22M38 36v6M43 36v4" strokeWidth={2.5} />
      </g>
    </>
  ),
  visitor: () => (
    <>
      <Person x={22} y={63} s={1.1} />
      <rect x={40} y={12} width={48} height={42} rx={4} className="p" />
      <path d="M40 16a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v6H40z" className="m" />
      <circle cx={46} cy={17} r={1.2} className="i" />
      <circle cx={50} cy={17} r={1.2} className="i" />
      <rect x={46} y={27} width={18} height={14} rx={2} className="t" />
      <path d="M68 29h14M68 35h10M46 47h30" className="o" />
      <g className="wf-pop">
        <circle cx={84} cy={54} r={8} className="i" />
        <path d="M80.5 54l2.5 2.5 4-4.5" className="ps" />
      </g>
    </>
  ),
  expired: () => (
    <>
      <rect x={6} y={30} width={30} height={16} rx={8} className="t" transform="rotate(-20 21 38)" strokeWidth={3} />
      <rect x={52} y={26} width={30} height={16} rx={8} className="t" transform="rotate(-20 67 34)" strokeWidth={3} />
      <path d="M42 22l2-6M46 30l6-2M38 40l-4 4" className="o" />
      <g className="wf-pop">
        <circle cx={48} cy={54} r={11} className="i" />
        <path d="M44 50l8 8M52 50l-8 8" className="ps" strokeWidth={2.2} />
      </g>
    </>
  ),

  // ---------- Respoon ----------
  giver: () => (
    <>
      <Person x={40} y={63} s={1.25} />
      <g className="wf-float">
        <rect x={27} y={52} width={26} height={14} rx={2} className="m" />
        <path d="M27 56.5h26" className="ps" />
        <path d="M40 60c-.8-1.6-3.2-1.2-3.2.6 0 1.6 3.2 3.4 3.2 3.4s3.2-1.8 3.2-3.4c0-1.8-2.4-2.2-3.2-.6z" style={{ fill: "var(--paper)" }} />
      </g>
      <path d="M66 22c-2 3 2 5 0 8M72 20c-2 3 2 5 0 8" className="o wf-float" />
    </>
  ),
  listing: () => (
    <>
      <rect x={10} y={12} width={52} height={50} rx={4} className="p" />
      <rect x={15} y={17} width={42} height={22} rx={2} className="t" />
      <path d="M24 30h24a12 8 0 0 1-24 0z" className="m" />
      <path d="M18 46h30M18 53h20" className="o" />
      <g className="wf-float">
        <path d="M76 44c-7-9-10-12-10-17a10 10 0 0 1 20 0c0 5-3 8-10 17z" className="m" />
        <circle cx={76} cy={27} r={3.5} className="p" />
      </g>
    </>
  ),
  map: () => (
    <>
      <path d="M8 16l24-6 24 6 30-6v46l-30 6-24-6-24 6z" className="p" />
      <path d="M32 10v46M56 16v46" className="o" />
      <path d="M8 40c14-4 20 6 34 2s20-12 44-6" className="t" strokeWidth={3} />
      <circle cx={46} cy={36} r={17} className="d" />
      <circle cx={46} cy={36} r={3} className="i" />
      <circle cx={46} cy={36} r={7} className="o wf-pulse" />
      {[
        [36, 26],
        [58, 42],
        [30, 46],
      ].map(([x, y]) => (
        <g key={x}>
          <path d={`M${x} ${y}c-3.5-4.5-5-6-5-8.5a5 5 0 0 1 10 0c0 2.5-1.5 4-5 8.5z`} className="m" />
          <circle cx={x} cy={y - 8.5} r={1.6} className="p" />
        </g>
      ))}
    </>
  ),
  chat: () => (
    <>
      <path d="M14 8h36a5 5 0 0 1 5 5v16a5 5 0 0 1-5 5H26l-8 7v-7h-4a5 5 0 0 1-5-5V13a5 5 0 0 1 5-5z" className="p" />
      <g className="wf-blink">
        <circle cx={22} cy={21} r={2.2} className="i" />
        <circle cx={32} cy={21} r={2.2} className="i" style={{ animationDelay: "150ms" }} />
        <circle cx={42} cy={21} r={2.2} className="i" style={{ animationDelay: "300ms" }} />
      </g>
      <path d="M46 34h36a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5h-4v7l-8-7H46a5 5 0 0 1-5-5V39a5 5 0 0 1 5-5z" className="m" />
      <path d="M48 43h28M48 50h18" className="ps" />
    </>
  ),
  pickup: () => (
    <>
      <path d="M6 34h12M10 42h10M6 50h12" className="o wf-slide" />
      <Person x={38} y={63} s={1.2} />
      <path d="M60 40a6 6 0 0 1 12 0" />
      <path d="M54 40h24l-2 22H56z" className="m" />
      <path d="M66 46c-2 4-1 9 3 10 1-5-1-8-3-10z" style={{ fill: "var(--paper)" }} />
    </>
  ),
  meal: () => (
    <>
      <g className="wf-float">
        <path d="M38 22c-3-4 3-6 0-10M48 22c-3-4 3-6 0-10M58 22c-3-4 3-6 0-10" className="o" />
      </g>
      <path d="M20 34c6-6 12-2 16-6 4 4 10-2 14 2 6-4 12 0 16-2 4 2 8 2 10 6z" className="t" />
      <path d="M14 36h68a34 24 0 0 1-68 0z" className="p" />
      <path d="M38 58h20" strokeWidth={3} />
      <path d="M48 44.5c-1.4-2.8-5.6-2.1-5.6 1.1 0 2.8 5.6 6 5.6 6s5.6-3.2 5.6-6c0-3.2-4.2-3.9-5.6-1.1z" className="i wf-pulse" />
    </>
  ),
} satisfies Record<string, () => React.ReactNode>;

export type ArtKey = keyof typeof art;

export function NodeIllustration({ name }: { name: ArtKey }) {
  const Draw = art[name];
  return (
    <svg viewBox="0 0 96 72" className="wf-art" aria-hidden focusable="false">
      <Draw />
    </svg>
  );
}
