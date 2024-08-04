import Image from "next/image";
import Link from "next/link";

const url = "https://www.course-api.com/react-tours-project";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

async function fetchTours(): Promise<Tour[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(url);
  const data: Tour[] = await response.json();
  return data;
}

async function ToursPage() {
  const tours = await fetchTours();
  console.log(tours);

  return (
    <div>
      <h1 className="text-5xl mb-2">Tours Page</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {tours.map((tour) => {
          const { image, id, name } = tour;

          return (
            <Link
              href={`/tours/${id}`}
              key={id}
              className="hover:text-blue-300"
            >
              <div className="relative h-48">
                <Image
                  src={image}
                  alt="tour"
                  className="object-cover rounded"
                  fill
                  priority
                />
              </div>
              <p>{name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default ToursPage;
