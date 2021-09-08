export default function LinkNewTab(props) {
  return (
    <a href={props.href} target={"_blank"} rel="noopener noreferrer">
      {props.children}
    </a>
  );
}
