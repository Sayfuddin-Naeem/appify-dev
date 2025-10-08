import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FA = ({ icon, className }) => {
  const [prefix, name] = icon.includes("/") ? icon.split("/") : [null, icon];
  const resolvedIcon =
    prefix === "fab" || prefix === "far" ? [prefix, name] : name;

  return <FontAwesomeIcon icon={resolvedIcon} className={className} />;
};

export default FA;
