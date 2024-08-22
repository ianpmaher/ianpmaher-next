import Image from "next/image";
import clientPromise from "../../lib/mongodb";

export default async function KeyboardsList() {
  const client = await clientPromise;
  const db = client.db("mechanicalKeyboards");

  const keyboards = await db.collection("mechanicalKeyboards").find({}).toArray();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Mechanical Keyboards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {keyboards.map((keyboard) => (
          <div
            key={keyboard._id}
            className=" shadow-dracula-purple shadow-xl rounded-lg p-4 hover:shadow-dracula-green duration-200 transition-all"
          >
            <Image
              src={keyboard.images[0]}
              alt={keyboard.model}
              className="object-contain rounded hover:scale-110 transition-all duration-200"
              width={500}
              height={500}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==" // 64x64 base64 encoded}
            />
            <h2 className="text-lg font-semibold mt-2">
              {keyboard.brand} {keyboard.model}
            </h2>
            <p className=" font-bold mt-2">
              <span className="text-sm font-thin font-mono after:mr-1">switches:</span>
              {keyboard.switchType}
            </p>
            {/* <p className=" font-bold mt-2">${keyboard.price}</p> */}
            <p className="mt-1 text-md text-justify">{keyboard.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
