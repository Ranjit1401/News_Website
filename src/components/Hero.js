export default function Hero() {
  return (
    <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
      
      <img
        src="https://picsum.photos/1600/900"
        alt="hero"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex items-center">
        <div className="text-white p-6 md:p-10 max-w-2xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-3">
            Breaking: AI Revolution is Transforming the World
          </h1>
          <p className="text-sm md:text-lg">
            Discover how AI is impacting industries and daily life.
          </p>
        </div>
      </div>
    </div>
  );
}