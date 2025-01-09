import React from "react";
import cardimg from "../../assets/images/cardImg.webp";
const CardCompo = ({
  name,
  post,
  imageUrl,
  instagramLink,
  linkedinLink,
  emailLink,
}) => {
  return (
    <div className="w-72 h-80 rounded-3xl relative overflow-hidden text-white shadow-lg">
      {/* Geometric Background */}
      <div className="absolute inset-0 ">
        <img
          //src="https://res.cloudinary.com/dturzqo8m/image/upload/v1734959025/mj6bfq3aevupbrc6gkhr.jpg"
          src={cardimg}
          alt=""
        />
      </div>
      {/* Geometric Background */}

      <div className="flex gap-2 h-5/6 relative z-10">
        {/* Links */}
        <div className="flex flex-col mt-6 ml-4 gap-2">
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500"
          >
            <i class="bi bi-instagram"></i>
          </a>
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <i class="bi bi-linkedin"></i>
          </a>
          <a
            href={`mailto:${emailLink}`}
            className="text-white hover:text-red-500"
          >
            <i class="bi bi-envelope"></i>
          </a>
        </div>
        {/* Links */}

        {/* Image */}
        <div className="flex justify-center mt-5 relative z-10">
          <img src={imageUrl} alt={name} className="w-55 object-cover" />
        </div>
        {/* Imgage */}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full h-1/6 bg-black text-center border-t-white border border-black">
        {post ? (
          <div className="flex justify-center items-center ml-2">
            <span className="text-white w-2/6 text-xxs mr-1">
              {post.toUpperCase()}
            </span>
            <span className="w-px h-8 bg-white mx-2"></span>{" "}
            {/* Vertical line */}
            <span className="text-orange-500 w-5/6 text-[42px] tracking-wide font-dharma">
              {name.toUpperCase()}
            </span>
          </div>
        ) : (
          <div className="text-orange-500 text-[45px] tracking-wide font-dharma">
            {name.toUpperCase()}
          </div>
        )}
      </div>
      {/* Footer */}
    </div>
  );
};

export default CardCompo;
