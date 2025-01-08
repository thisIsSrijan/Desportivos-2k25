import React from "react";
import Cardcompo from "../components/ourTeam_compo/Cardcompo";
import TextField from "../components/ourTeam_compo/TextField";
import Team from "../../Team.json";

const OurTeam = () => {
  const festheaddata = Team.festhead;
  const sportscouncildata = Team.sportscouncil;
  const creativeteamdata = Team.creativeteam;
  const webdevelopmentdata = Team.webdevelopment;
  const sponsorshipdata = Team.sponsorshipteam;
  const publicrelationdata = Team.publicrelations;
  const eventmanagementdata = Team.eventmanagement;
  const artistandlogisticsdata = Team.artistandlogistics;

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
            <TextField heading="web development team" />
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
            <TextField heading="sponsorship team" />
          </div>
          <div className="flex flex-wrap justify-center gap-24">
            {sponsorshipdata.map((member, index) => (
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
      </div>
    </div>
  );
};

export default OurTeam;
