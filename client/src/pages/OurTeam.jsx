import React from "react";
import Cardcompo from "../components/ourTeam_compo/Cardcompo";
import TextField from "../components/ourTeam_compo/TextField";
import Background from "../assets/images/Background.webp";
import logo from "../assets/images/logo.webp";
import { Link } from "react-router-dom";
import Footer from "../components/base/Footer";
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
    <div>
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
                className="absolute sm:h-[120px] h-[80px] w-30 sm:top-[24px] top-[3px] left-[-5px] sm:left-[16px] z-10"
                onClick={() => (window.location.href = "/")}
                style={{ cursor: "pointer" }}
              />
            </div>
            <Link
              to="/"
              className="text-center align-middle absolute w-fit h-fit py-2 px-5 right-[16px] sm:right-16 sm:top-[72px] md:top-[65px] top-[26px] border-2 border-[#F85B02] shadow-[2px_1.5px_13px_#F85B02] rounded-xl z-10 text-white text-l sm:text-xl lg:text-3xl bg-[#424242BF] font-squid hover:bg-[#515151bf] hover:scale-105"
            >
              HOME
            </Link>
          </div>
          <div>
            <div className="md:flex md:justify-between">
              {/* <TextField heading="Meet the team" /> */}
              <TextField
                text="Meet The Team"
                className="text-[80px] sm:text-[150px] font-bold text-gradient uppercase text-white font-dharma tracking-wide "
              />
              {/* <TextField heading="fest head" /> */}
              <TextField
                text="Fest Head"
                className="block text-[80px] sm:text-[150px] font-bold text-gradient uppercase text-white font-dharma tracking-wide "
              />
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
              <TextField
                text="sports council"
                className="block text-[80px] sm:text-[150px] font-bold text-gradient uppercase text-white font-dharma tracking-wide"
              />
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
              <TextField
                text="development team"
                className="block text-[80px] sm:text-[150px] font-bold text-gradient uppercase text-white font-dharma tracking-wide"
              />
            </div>
            <div>
              <div className="flex flex-wrap justify-center gap-12 sm:gap-24 lg:gap-50 sm:mb-24">
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
              <div className="w-[80vw] lg:w-[70vw] uxl:w-[60vw] mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 text-center relative mt-8">
                {webdevelopmentdata.map(
                  (member, index) =>
                    !member.post && (
                      <span
                        key={index}
                        className="text-white font-dharma font-light tracking-wide text-[40px] md:text-[40px] lg:text-[50px]"
                      >
                        {member.name}
                      </span>
                    )
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="text-left">
              <TextField
                text="creative team"
                className="block text-[80px] sm:text-[150px] font-bold text-gradient uppercase text-white font-dharma tracking-wide"
              />
            </div>
            <div>
              <div className="flex flex-wrap justify-center gap-24">
                {/* render only two member here */}
                {creativeteamdata.map(
                  (member, index) =>
                    member.post && (
                      <Cardcompo
                        key={index}
                        name={member.name}
                        imageUrl={member.imageUrl}
                        instagramLink={member.instagramLink}
                        linkedinLink={member.linkedinLink}
                        emailLink={member.emailLink}
                        post={member.post}
                      />
                    )
                )}
              </div>
              <div className="w-[80vw] lg:w-[70vw] uxl:w-[60vw] mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 text-center relative mt-20 ">
                {creativeteamdata.map(
                  (member, index) =>
                    !member.post && (
                      <span
                        key={index}
                        className="text-white font-dharma font-light tracking-wide text-[40px] md:text-[40px] lg:text-[50px]"
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
              <TextField
                text="sponsorship team"
                className="block text-[80px] sm:text-[150px] font-bold text-gradient uppercase text-white font-dharma tracking-wide"
              />
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
            <div className=" uxl:w-[80vw] mx-auto grid grid-cols-1 sm:grid-cols-3  md:grid-cols-5 text-center relative mt-8">
              {sponsorshipdata.map(
                (member, index) =>
                  !member.post && (
                    <div
                      key={index}
                      className="text-white font-dharma font-light tracking-wide text-[40px] md:text-[40px] lg:text-[50px]"
                    >
                      {member.name}
                    </div>
                  )
              )}
            </div>
          </div>
          <div>
            <div>
              <TextField
                text="public relations"
                className="block text-[80px] sm:text-[150px] font-bold text-gradient uppercase text-white font-dharma tracking-wide"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-24">
              {publicrelationdata.map(
                (member, index) =>
                  member.post && (
                    <Cardcompo
                      key={index}
                      name={member.name}
                      imageUrl={member.imageUrl}
                      instagramLink={member.instagramLink}
                      linkedinLink={member.linkedinLink}
                      emailLink={member.emailLink}
                      post={member.post}
                    />
                  )
              )}
            </div>
            <div className="w-[80vw] lg:w-[70vw] uxl:w-[60vw] mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 text-center relative mt-20 ">
              {publicrelationdata.map(
                (member, index) =>
                  !member.post && (
                    <span
                      key={index}
                      className="text-white font-dharma font-light tracking-wide text-[40px] md:text-[40px] lg:text-[50px]"
                    >
                      {member.name}
                    </span>
                  )
              )}
            </div>
          </div>
          <div>
            <div className="text-right">
              <TextField
                text="event management"
                className="block text-[80px] sm:text-[150px] font-bold text-gradient uppercase text-white font-dharma tracking-wide"
              />
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
              <TextField
                text="artist and logistics"
                className="block text-[80px] sm:text-[150px] font-bold text-gradient uppercase text-white font-dharma tracking-wide"
              />
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
              <TextField
                text="ui/ux team"
                className="block text-[80px] sm:text-[150px] font-bold text-gradient uppercase text-white font-dharma tracking-wide"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-24">
              {uiuxdata.map(
                (member, index) =>
                  member.post && (
                    <Cardcompo
                      key={index}
                      name={member.name}
                      imageUrl={member.imageUrl}
                      instagramLink={member.instagramLink}
                      linkedinLink={member.linkedinLink}
                      emailLink={member.emailLink}
                      post={member.post}
                    />
                  )
              )}
            </div>
            <div className="w-[80vw] lg:w-[70vw] uxl:w-[60vw] mx-auto grid grid-cols-1 sm:grid-cols-3 text-center relative mt-20 ">
              {uiuxdata.map(
                (member, index) =>
                  !member.post && (
                    <span
                      key={index}
                      className="text-white font-dharma font-light tracking-wide text-[40px] md:text-[40px] lg:text-[50px]"
                    >
                      {member.name}
                    </span>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurTeam;
