import CardLayout from "../../Common/CardLayout";

const ExpertiseCard = ({ data }) => {
  return (
    <CardLayout>
      <div className="h-full space-y-2 p-8 card_stylings">
        <div className=" text-green-400">{data.title}</div>
        <div className="text-sm text-LightGray font-normal">{data.desc}</div>
      </div>
    </CardLayout>
  );
};

export default ExpertiseCard;
