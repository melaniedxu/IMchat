/* eslint-disable comma-dangle */
/* eslint-disable import/no-duplicates */
/* eslint-disable prefer-const */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
// import { render, screen } from "@testing-library/react";
import Register from "./App";
import Login from "./App";
import AddContactsComponent from "./App";
import ContactComponent from "./App";
import CreatePost from "./App";
import DeleteContactButton from "./App";
import deleteMediaMessageButton from "./App";
import deleteMessageButton from "./App";
import MainView from "./App";
import MessageComponent from "./App";
import NewPassword from "./App";
import Options from "./App";
import Participant from "./App";
import PostCarousel from "./App";
import Reset from "./App";
import SearchComponent from "./App";
import SearchSideBar from "./App";
import useInterval from "./App";
import VideoRoom from "./App";

const renderer = require("react-test-renderer");

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
jest.mock("react-mic");

test("register matches snapshot", () => {
  const regComponent = renderer.create(<Register />);
  let tree = regComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

test("login matches snapshot", () => {
  const logInComponent = renderer.create(<Login />);
  let tree = logInComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Add contacts matches snapshot", () => {
  const addContactsComponent = renderer.create(<AddContactsComponent />);
  let tree = addContactsComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Contact Component matches snapshot", () => {
  const contactComponent = renderer.create(<ContactComponent />);
  let tree = contactComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Create post matches snapshot", () => {
  const CreatePostComponent = renderer.create(<CreatePost />);
  let tree = CreatePostComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Delete Contact matches snapshot", () => {
  const delContactsComponent = renderer.create(<DeleteContactButton />);
  let tree = delContactsComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

test("delete media message button matches snapshot", () => {
  const delMediaMessageComponent = renderer.create(
    <deleteMediaMessageButton />
  );
  let tree = delMediaMessageComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

test("delete Message Button matches snapshot", () => {
  const delMessageComponent = renderer.create(<deleteMessageButton />);
  let tree = delMessageComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Main View matches snapshot", () => {
  const mainViewComponent = renderer.create(<MainView />);
  let tree = mainViewComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Message Component matches snapshot", () => {
  const messageComponent = renderer.create(<MessageComponent />);
  let tree = messageComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

test("New Password matches snapshot", () => {
  const NewpasswordComponent = renderer.create(<NewPassword />);
  let tree = NewpasswordComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Options matches snapshot", () => {
  const optionsComponent = renderer.create(<Options />);
  let tree = optionsComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Participant matches snapshot", () => {
  const participantComponent = renderer.create(<Participant />);
  let tree = participantComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Post Carousel matches snapshot", () => {
  const postCarouselComponent = renderer.create(<PostCarousel />);
  let tree = postCarouselComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Reset matches snapshot", () => {
  const ResetComponent = renderer.create(<Reset />);
  let tree = ResetComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Search Component matches snapshot", () => {
  const searchComponent = renderer.create(<SearchComponent />);
  let tree = searchComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Search Side Bar matches snapshot", () => {
  const searchSideBarComponent = renderer.create(<SearchSideBar />);
  let tree = searchSideBarComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

test("use Interval matches snapshot", () => {
  const useIntervalComponent = renderer.create(<useInterval />);
  let tree = useIntervalComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

test("VideoRoom matches snapshot", () => {
  const VideoRoomComponent = renderer.create(<VideoRoom />);
  let tree = VideoRoomComponent.toJSON();
  expect(tree).toMatchSnapshot();
});
