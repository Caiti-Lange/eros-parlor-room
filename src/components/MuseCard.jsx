//Displays one Muse (name, origin, epithets, image)

export default function MuseCard({ muse }) {
  return (
    <article className="bg-white border border-[#efe8dd] rounded p-4 shadow-sm">
      <h3 className="font-serifish text-xl text-burgundy">{muse.name}</h3>
      <p className="text-sm text-rose/80">{muse.origin_title}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {muse.epithets.map((e, i) => (
          <span key={i} className="text-xs px-2 py-1 bg-[#faf0e6] rounded border">{e}</span>
        ))}
      </div>
    </article>
  )
}
