import React from "react";
import Cardcompo from "../components/ourTeam_compo/Cardcompo";
import TextField from "../components/ourTeam_compo/TextField";
import Team from "../../Team.json";
import { Link } from "react-router-dom";
import logo from "../assets/images/image.png";

const OurTeam = () => {
  const festheaddata = Team.festhead;
  const sportscouncildata = Team.sportscouncil;
  const creativeteamdata = Team.creativeteam;
  const webdevelopmentdata = Team.webdevelopment;
  const sponsorshipdata = Team.sponsorshipteam;
  const publicrelationdata = Team.publicrelations;
  const eventmanagementdata = Team.eventmanagement;
  const artistandlogisticsdata = Team.artistandlogistics;
  const uiuxdata = Team.uiux;

  return (
    <div
      className=" bg-black bg-contain relative"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dturzqo8m/image/upload/v1734955828/ijjesgbpw5ky12jqtjqn.svg')",
      }}
    >
      {/* Content overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Content */}
      <div className="relative z-10 px-5">
        <div className="pt-20 sm:pt-36">
          <div>
            <img
              src={logo}
              alt="Logo"
              className="absolute lg:h-[150px] sm:h-[120px] h-[80px] w-30 sm:top-[24px] top-[3px] left-[-5px] sm:left-[16px] z-10"
              onClick={() => (window.location.href = "/")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <Link
            to="/"
            className="text-center align-middle absolute w-fit h-fit py-2 px-5 right-[16px] sm:right-16 sm:top-[72px] md:top-[78px] top-[26px] border-2 border-[#F85B02] shadow-[2px_1.5px_13px_#F85B02] rounded-xl z-10 text-white text-l sm:text-xl lg:text-3xl bg-[#424242BF] font-squid hover:bg-[#515151bf] hover:scale-105"
          >
            HOME
          </Link>
        </div>
        <div>
          <div className="md:flex md:justify-between">
            <TextField heading="Meet the team" />
            <TextField heading="fest head" />
          </div>
          <div className="flex flex-wrap justify-center gap-24">
            {festheaddata.map((member, index) => (
              <Cardcompo
                key={index}
                name={member.name}
                imageUrl={member.imageUrl}
                instagramLink={member.instagramLink}
                linkedinLink={member.linkedinLink}
                emailLink={member.emailLink}
              />
            ))}
          </div>
        </div>
        <div>
          <div>
            <TextField heading="sports council" />
          </div>
          <div className="flex flex-wrap justify-center gap-24">
            {sportscouncildata.map((member, index) => (
              <Cardcompo
                key={index}
                name={member.name}
                imageUrl={member.imageUrl}
                instagramLink={member.instagramLink}
                linkedinLink={member.linkedinLink}
                emailLink={member.emailLink}
                post={member.post}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="text-right">
            <TextField heading="development team" />
          </div>
          <div>
            <div className="flex flex-wrap justify-center gap-24 md:gap-50 mb-24">
              {/* render only two member here */}
              {webdevelopmentdata.slice(0, 2).map((member, index) => (
                <Cardcompo
                  key={index}
                  name={member.name}
                  imageUrl={member.imageUrl}
                  instagramLink={member.instagramLink}
                  linkedinLink={member.linkedinLink}
                  emailLink={member.emailLink}
                  post={member.post}
                />
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-24">
              {/* render the rest of people here */}
              {webdevelopmentdata.slice(2).map((member, index) => (
                <Cardcompo
                  key={index}
                  name={member.name}
                  imageUrl={member.imageUrl}
                  instagramLink={member.instagramLink}
                  linkedinLink={member.linkedinLink}
                  emailLink={member.emailLink}
                  post={member.post}
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="text-right">
            <TextField heading="creative team" />
          </div>
          <div>
            <div className="flex flex-wrap justify-center gap-24 md:gap-50 mb-24">
              {/* render only two member here */}
              {creativeteamdata.slice(0, 2).map((member, index) => (
                <Cardcompo
                  key={index}
                  name={member.name}
                  imageUrl={member.imageUrl}
                  instagramLink={member.instagramLink}
                  linkedinLink={member.linkedinLink}
                  emailLink={member.emailLink}
                  post={member.post}
                />
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-24">
              {/* render the rest of people here */}
              {creativeteamdata.slice(2).map((member, index) => (
                <Cardcompo
                  key={index}
                  name={member.name}
                  imageUrl={member.imageUrl}
                  instagramLink={member.instagramLink}
                  linkedinLink={member.linkedinLink}
                  emailLink={member.emailLink}
                  post={member.post}
                />
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="text-right">
            <TextField heading="sponsorship team" />
          </div>
          <div className="flex flex-wrap justify-center gap-24">
            {sponsorshipdata.map((member, index) =>
              member.post ? (
                <Cardcompo
                  key={index}
                  name={member.name}
                  imageUrl={member.imageUrl}
                  instagramLink={member.instagramLink}
                  linkedinLink={member.linkedinLink}
                  emailLink={member.emailLink}
                  post={member.post}
                />
              ) : (
                ""
              )
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 text-center relative mt-10">
            {sponsorshipdata.map(
              (member, index) =>
                !member.post && (
                  <span
                    key={index}
                    className="text-white font-dharma tracking-wide text-[30px]  md:text-[50px] lg:text-[70px]"
                  >
                    {member.name}
                  </span>
                )
            )}
          </div>
        </div>
        <div>
          <div>
            <TextField heading="public relations" />
          </div>
          <div className="flex flex-wrap justify-center gap-24">
            {publicrelationdata.map((member, index) => (
              <Cardcompo
                key={index}
                name={member.name}
                imageUrl={member.imageUrl}
                instagramLink={member.instagramLink}
                linkedinLink={member.linkedinLink}
                emailLink={member.emailLink}
                post={member.post}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="text-right">
            <TextField heading="event management" />
          </div>
          <div className="flex flex-wrap justify-center gap-24">
            {eventmanagementdata.map((member, index) => (
              <Cardcompo
                key={index}
                name={member.name}
                imageUrl={member.imageUrl}
                instagramLink={member.instagramLink}
                linkedinLink={member.linkedinLink}
                emailLink={member.emailLink}
                post={member.post}
              />
            ))}
          </div>
        </div>
        <div>
          <div>
            <TextField heading="artist and logistics team" />
          </div>
          <div className="flex flex-wrap justify-center gap-24">
            {artistandlogisticsdata.map((member, index) => (
              <Cardcompo
                key={index}
                name={member.name}
                imageUrl={member.imageUrl}
                instagramLink={member.instagramLink}
                linkedinLink={member.linkedinLink}
                emailLink={member.emailLink}
                post={member.post}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="text-right">
            <TextField heading="ui/ux team" />
          </div>
          <div className="flex flex-wrap justify-center gap-24">
            {uiuxdata.map((member, index) => (
              <Cardcompo
                key={index}
                name={member.name}
                imageUrl={member.imageUrl}
                instagramLink={member.instagramLink}
                linkedinLink={member.linkedinLink}
                emailLink={member.emailLink}
                post={member.post}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
