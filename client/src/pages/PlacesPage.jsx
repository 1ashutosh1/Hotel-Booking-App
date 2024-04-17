import { Link, useParams } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import PlacesFormPage from "./PlacesFormPage";

export default function PlacesPage() {
  const { action } = useParams();
  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
            to={"/account/places/new"}
          >
            <IoMdAdd className="my-auto" />
            Add new place
          </Link>
        </div>
      )}
    </div>
  );
}
