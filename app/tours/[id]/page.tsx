import mapsImg from "@/images/pexels-andrew-2859169.jpg";
import Image from "next/image";
const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

function Tour({ params }: { params: { id: string } }) {
  return (
    <div>
      <h3 className="text-2xl">ID: {params.id}</h3>
      <div className="flex gap-x-4">
        <div>
          <Image
            src={mapsImg}
            alt="maps"
            width={192}
            height={192}
            className="w-48 h-48 object-cover rounded"
            priority
          />
          <p>local image</p>
        </div>
        <div>
          <Image
            src={url}
            alt="tours"
            width={192}
            height={192}
            className="w-48 h-48 object-cover rounded"
            priority
            sizes="33vw"
          />
          <p>remote image</p>
        </div>
      </div>
    </div>
  );
}
export default Tour;
