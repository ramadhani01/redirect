// Taruh di folder /api di project Vercel yang sama dengan redi.html
const TARGET_URL = process.env.TARGET_URL || "https://cdnvidoyvlc.vercel.app/vid.html?unlock=vid_1792631776937";
const VALID = ["379", "397", "739", "793", "937", "973"];

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return res.status(405).json({ ok: false });

  const code = String((req.body && req.body.code) || "").trim();
  await new Promise((r) => setTimeout(r, 400)); // perlambat tebak-tebakan

  if (VALID.includes(code)) return res.status(200).json({ ok: true, url: TARGET_URL });
  return res.status(401).json({ ok: false });
};
