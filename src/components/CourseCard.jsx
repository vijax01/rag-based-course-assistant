import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const CourseCard = (props) => {
  return (
    <div className="w-75 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">

      {/* Image */}
      <div className="relative">
        <img
          src={props.image}
          alt="course"
          className="w-full h-40 object-cover"
        />

        {/* Wishlist */}
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100">
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">

        {/* Title */}
        <h3 className="font-semibold text-lg leading-snug">
          {props.title}
        </h3>

        {/* Author */}
        <p className="text-sm text-gray-600">
          {props.author}
        </p>

        {/* Lectures */}
        <p className="text-sm text-gray-500">
          {props.lectures} Lectures
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold text-orange-500">{props.rating}</span>
          <span className="text-yellow-500">★★★★★</span>
          <span className="text-gray-500">({props.reviews})</span>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between pt-2">

          {/* Premium badge */}
          <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-md font-medium">
            {props.badge}
          </span>

          {/* Enroll button */}
          {props.enrolled ? (
            <Link to={`/course/${props.id}`} >
              <button className="bg-green-600 cursor-pointer text-white text-sm px-4 py-1.5 rounded-md hover:bg-green-700 transition ">
                Study
              </button>
            </Link>
          ) : (
            <button className="bg-purple-600 cursor-pointer text-white text-sm px-4 py-1.5 rounded-md hover:bg-purple-700 transition ">
              Enroll
            </button>
          )}


        </div>

      </div>
    </div>
  );
};

export default CourseCard;