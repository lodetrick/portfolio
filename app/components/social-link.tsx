export default function SocialLink({ href, icon: Icon, text = "" }) {
  return (
	  <a href={href} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 flex">
		<Icon className="align-middle" /><p className="my-0 mb-1">{text}</p>
	  </a>
  );
}