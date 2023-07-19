import React, { useEffect, useContext, useState } from "react";

import { CrowdFundingContext } from "../Context/CroudFunding";
import { Hero, Card, PupUp } from "../Components";

const index = () => {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations,
  } = useContext(CrowdFundingContext);
  const [allcampaign, setAllCampaign] = useState();
  const [usercampaign, settUserCampaign] = useState();

  useEffect(() => {
    const getCampaignsData = getCampaigns();
    const userCampaignsData = getUserCampaigns();
    return async () => {
      const allData = await getCampaignsData;
      const userData = await userCampaignsData;
      setAllCampaign(allData);
      settUserCampaign(userData);
    };
  }, []);

  //donation popup model
  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();
  console.log(donateCampaign);
  return (
    <>
      <Hero titleData={titleData} createCampaign={createCampaign} />
      <Card
        title="All listed Campaign"
        allcampaign={allcampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />
      <Card
        title="your created Campaign"
        usercampaign={usercampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />

      {openModel && (
        <PupUp
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          donate={donateCampaign}
          donateFunction={donate}
        />
      )}
    </>
  );
};

export default index;
