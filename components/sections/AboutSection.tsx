export function AboutSection() {
  return (
    <section
      id="o-mnie"
      className="flex min-h-screen items-center justify-center bg-neutral-100 px-4 py-20"
    >
      <div className="slide-up w-full max-w-6xl">
        <h2 className="mb-12 inline-block w-full border-b-4 border-black pb-4 text-center text-5xl font-bold">
          O MNIE
        </h2>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 h-full w-full border-2 border-black opacity-20" />
            <img
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&h=800&fit=crop"
              alt="Mistrz Jarosław Świeczkowski"
              className="relative h-[500px] w-full border-4 border-black object-cover"
            />
          </div>

          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-xl font-light">
              Nazywam się{" "}
              <span className="font-bold">Jarosław Świeczkowski</span> i
              praktykuję Taichi Quan od ponad 40 lat.
            </p>

            <p>
              Przez te cztery dekady miałem zaszczyt uczyć się od
              najwybitniejszych mistrzów tej sztuki, w tym od mistrza Chen i
              mistrza Chen Binga, którzy przekazali mi głęboką wiedzę o
              tradycyjnym stylu Chen Taichi.
            </p>

            <p>
              Taichi Quan to nie tylko forma sztuki walki - to filozofia życia,
              sposób na osiągnięcie harmonii między ciałem a umysłem, równowagi
              pomiędzy Yin i Yang. W mojej praktyce łączę tradycyjne techniki z
              nowoczesnym podejściem do zdrowia i dobrostanu.
            </p>

            <p>
              Moją misją jest przekazywanie tej starożytnej wiedzy kolejnym
              pokoleniom, pomagając uczniom odkryć głębię tej praktyki - od
              poprawy zdrowia fizycznego, przez rozwój wewnętrznej siły, po
              osiągnięcie spokoju umysłu.
            </p>

            <div className="mt-12 border-t-2 border-gray-300 pt-8">
              <p className="text-center text-gray-600 italic">
                "Mistrz to ten, kto nigdy nie przestaje być uczniem"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
