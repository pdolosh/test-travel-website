import React from "react";
import Button from "../../Buttons/Button";
import SandraImg from "../../../assets/Images/Sandra.png";
import Mark from "../../../assets/Icons/Mark";
import Share from "../../../assets/Icons/Share";
import Avatar from "./Avatar";

const CommentCard: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-2xl">Iceland’s Highlights</h1>
        <div className="space-x-2.5 flex items-center">
          <Button
            variant="primary"
            size="medium"
            startIcon={<Mark />}
            label="Add to wishlist"
          />
          <Button
            variant="primary"
            size="medium"
            startIcon={<Share />}
            label="Share"
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <Avatar src={SandraImg} name="Sandra" title="Fyno expert" />
        <span>
          Welcome to Iceland, a land of breathtaking landscapes and unspoiled
          natural beauty. From its majestic waterfalls and geothermal wonders to
          the vibrant culture and rich history, Iceland promises an
          unforgettable adventure for every traveler.
        </span>
      </div>
    </div>
  );
};

export default CommentCard;
