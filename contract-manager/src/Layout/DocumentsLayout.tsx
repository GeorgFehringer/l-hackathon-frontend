//TODO:
// - Add layout components (grid with top bar, left and right sidebar and content)
// - Add left sidebar component (this is good for both layouts) containing the list of documents
// - Add Pdf document viewer in the middle (good for both again) contents section
// - Add two top bars (one for legal one for finance) if role == finance call one top bar otherwise call the other
// - Add a right sidebar one for each role, the right sidebarbar for legal contains only plaintext labels the other one contains a form (2 separate components called based on role)
// - Layout should receive documents as a prop from the outside (i.e. from the Contracts page)
// - On document list item click => display document in viewer and change right bar details. => implement using a useState Hook where on click you set current document to the one clicked
// - Right bar receives current document as prop, document viewer receives document as a prop.

interface Props {}

function DocumentsLayout(props: Props) {
  return <></>;
}

export default DocumentsLayout;
