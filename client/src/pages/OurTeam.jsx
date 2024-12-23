import React from "react";
import Cardcompo from "../components/ourTeam_compo/Cardcompo";
import TextField from "../components/ourTeam_compo/TextField";

const OurTeam = () => {
  return (
    <div
      className="  bg-center relative"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dturzqo8m/image/upload/v1734955828/ijjesgbpw5ky12jqtjqn.svg')",
      }}
    >
      {/* Content overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 px-5">
        <div>
          <div className="md:flex md:justify-between">
            <TextField heading="Meet the team" />
            <TextField heading="fest head" />
          </div>
          <div className="flex flex-wrap justify-center gap-24">
            <Cardcompo
              name="Chetan Sharma"
              imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
              instagramLink="https://instagram.com/chetan"
              linkedinLink="https://linkedin.com/in/chetan"
              emailLink="chetan@example.com"
            />
            <Cardcompo
              name="Chetan Sharma"
              imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
              instagramLink="https://instagram.com/chetan"
              linkedinLink="https://linkedin.com/in/chetan"
              emailLink="chetan@example.com"
            />
          </div>
        </div>
        <div>
          <div>
            <TextField heading="sports council" />
          </div>
          <div className="flex flex-wrap justify-center gap-24">
            <Cardcompo
              name="Chetan Sharma"
              imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
              instagramLink="https://instagram.com/chetan"
              linkedinLink="https://linkedin.com/in/chetan"
              emailLink="chetan@example.com"
              post="General Secretary Sports"
            />
            <Cardcompo
              name="Chetan Sharma"
              imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
              instagramLink="https://instagram.com/chetan"
              linkedinLink="https://linkedin.com/in/chetan"
              emailLink="chetan@example.com"
              post="General Secretary Sports"
            />
            <Cardcompo
              name="Chetan Sharma"
              imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
              instagramLink="https://instagram.com/chetan"
              linkedinLink="https://linkedin.com/in/chetan"
              emailLink="chetan@example.com"
              post="General Secretary Sports"
            />
          </div>
        </div>
        <div>
          <div className="text-right">
            <TextField heading="creative team" />
          </div>
          <div>
            <div className="flex flex-wrap justify-center gap-50 mb-32">
              <Cardcompo
                name="Chetan Sharma"
                imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
                instagramLink="https://instagram.com/chetan"
                linkedinLink="https://linkedin.com/in/chetan"
                emailLink="chetan@example.com"
                post="Creative Team"
              />
              <Cardcompo
                name="Chetan Sharma"
                imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
                instagramLink="https://instagram.com/chetan"
                linkedinLink="https://linkedin.com/in/chetan"
                emailLink="chetan@example.com"
                post="Creative Team"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-24">
              <Cardcompo
                name="Chetan Sharma"
                imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
                instagramLink="https://instagram.com/chetan"
                linkedinLink="https://linkedin.com/in/chetan"
                emailLink="chetan@example.com"
                post="Creative Team"
              />
              <Cardcompo
                name="Chetan Sharma"
                imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
                instagramLink="https://instagram.com/chetan"
                linkedinLink="https://linkedin.com/in/chetan"
                emailLink="chetan@example.com"
                post="Creative Team"
              />
              <Cardcompo
                name="Chetan Sharma"
                imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
                instagramLink="https://instagram.com/chetan"
                linkedinLink="https://linkedin.com/in/chetan"
                emailLink="chetan@example.com"
                post="Creative Team"
              />
              <Cardcompo
                name="Chetan Sharma"
                imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
                instagramLink="https://instagram.com/chetan"
                linkedinLink="https://linkedin.com/in/chetan"
                emailLink="chetan@example.com"
                post="Creative Team"
              />
              <Cardcompo
                name="Chetan Sharma"
                imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
                instagramLink="https://instagram.com/chetan"
                linkedinLink="https://linkedin.com/in/chetan"
                emailLink="chetan@example.com"
                post="Creative Team"
              />
              <Cardcompo
                name="Chetan Sharma"
                imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
                instagramLink="https://instagram.com/chetan"
                linkedinLink="https://linkedin.com/in/chetan"
                emailLink="chetan@example.com"
                post="Creative Team"
              />
              <Cardcompo
                name="Chetan Sharma"
                imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
                instagramLink="https://instagram.com/chetan"
                linkedinLink="https://linkedin.com/in/chetan"
                emailLink="chetan@example.com"
                post="Creative Team"
              />
              <Cardcompo
                name="Chetan Sharma"
                imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
                instagramLink="https://instagram.com/chetan"
                linkedinLink="https://linkedin.com/in/chetan"
                emailLink="chetan@example.com"
                post="Creative Team"
              />
              <Cardcompo
                name="Chetan Sharma"
                imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
                instagramLink="https://instagram.com/chetan"
                linkedinLink="https://linkedin.com/in/chetan"
                emailLink="chetan@example.com"
                post="Creative Team"
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <TextField heading="web development" />
          </div>
          <div className="flex flex-wrap justify-center gap-24">
            <Cardcompo
              name="Chetan Sharma"
              imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
              instagramLink="https://instagram.com/chetan"
              linkedinLink="https://linkedin.com/in/chetan"
              emailLink="chetan@example.com"
              post="Web Development"
            />
            <Cardcompo
              name="Chetan Sharma"
              imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
              instagramLink="https://instagram.com/chetan"
              linkedinLink="https://linkedin.com/in/chetan"
              emailLink="chetan@example.com"
              post="Web Development"
            />
            <Cardcompo
              name="Chetan Sharma"
              imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
              instagramLink="https://instagram.com/chetan"
              linkedinLink="https://linkedin.com/in/chetan"
              emailLink="chetan@example.com"
              post="Web Development"
            />
            <Cardcompo
              name="Chetan Sharma"
              imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
              instagramLink="https://instagram.com/chetan"
              linkedinLink="https://linkedin.com/in/chetan"
              emailLink="chetan@example.com"
              post="Web Development"
            />
            <Cardcompo
              name="Chetan Sharma"
              imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
              instagramLink="https://instagram.com/chetan"
              linkedinLink="https://linkedin.com/in/chetan"
              emailLink="chetan@example.com"
              post="Web Development"
            />
            <Cardcompo
              name="Chetan Sharma"
              imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
              instagramLink="https://instagram.com/chetan"
              linkedinLink="https://linkedin.com/in/chetan"
              emailLink="chetan@example.com"
              post="Web Development"
            />
          </div>
        </div>
        <div>
          <div className="text-right">
            <TextField heading="sponsorship team" />
          </div>
          <div className="flex flex-wrap justify-center gap-24">
            <Cardcompo
              name="Chetan Sharma"
              imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
              instagramLink="https://instagram.com/chetan"
              linkedinLink="https://linkedin.com/in/chetan"
              emailLink="chetan@example.com"
              post="General Secretary Sports"
            />
            <Cardcompo
              name="Chetan Sharma"
              imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
              instagramLink="https://instagram.com/chetan"
              linkedinLink="https://linkedin.com/in/chetan"
              emailLink="chetan@example.com"
              post="Sponsorship Team"
            />
            <Cardcompo
              name="Chetan Sharma"
              imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
              instagramLink="https://instagram.com/chetan"
              linkedinLink="https://linkedin.com/in/chetan"
              emailLink="chetan@example.com"
              post="Sponsorship Team"
            />
            <Cardcompo
              name="Chetan Sharma"
              imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
              instagramLink="https://instagram.com/chetan"
              linkedinLink="https://linkedin.com/in/chetan"
              emailLink="chetan@example.com"
              post="Sponsorship Team"
            />
            <Cardcompo
              name="Chetan Sharma"
              imageUrl="https://res.cloudinary.com/dturzqo8m/image/upload/v1734953575/cvggow7lr0qy0r1rwl6k.png"
              instagramLink="https://instagram.com/chetan"
              linkedinLink="https://linkedin.com/in/chetan"
              emailLink="chetan@example.com"
              post="Sponsorship Team"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
