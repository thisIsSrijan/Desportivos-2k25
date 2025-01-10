import React from "react";
import Cardcompo from "../components/ourTeam_compo/Cardcompo";
import TextField from "../components/ourTeam_compo/TextField";
import Background from "../assets/images/Background.webp";
import logo from "../assets/images/logo.webp";
import { Link } from "react-router-dom";

import teams from "../assets/data/teams";

const OurTeam = () => {
  const festheaddata = teams.festhead;
  const sportscouncildata = teams.sportscouncil;
  const creativeteamdata = teams.creativeteam;
  const webdevelopmentdata = teams.webdevelopment;
  const sponsorshipdata = teams.sponsorshipteam;
  const publicrelationdata = teams.publicrelations;
  const eventmanagementdata = teams.eventmanagement;
  const artistandlogisticsdata = teams.artistandlogistics;
  const uiuxdata = teams.uiux;

  return (
    <div
      className="  bg-contain relative"
      style={{
        //backgroundImage:"url('https://res.cloudinary.com/dturzqo8m/image/upload/v1734955828/ijjesgbpw5ky12jqtjqn.svg')",
        backgroundImage: `url(${Background})`,
      }}
    >
      {/* Content overlay */}
      <div className="absolute inset-0  bg-opacity-75"></div>

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
            <div className="w-10/12 mx-auto grid grid-cols-2 sm:grid-cols-3 text-center relative mt-8">
              {webdevelopmentdata.map(
                (member, index) =>
                  !member.post && (
                    <span
                      key={index}
                      className="text-white font-dharma font-light tracking-wide text-[40px] md:text-[30px] lg:text-[60px]"
                    >
                      {member.name}
                    </span>
                  )
              )}
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
          <div className="w-10/12 mx-auto grid grid-cols-2 sm:grid-cols-3 text-center relative mt-10">
            {sponsorshipdata.map(
              (member, index) =>
                !member.post && (
                  <div
                    key={index}
                    className="text-white font-dharma font-light tracking-wide text-[35px] md:text-[40px] lg:text-[60px]"
                  >
                    {member.name}
                  </div>
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
