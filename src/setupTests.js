import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { createSerializer } from "enzyme-to-json";

const serializer = createSerializer({ mode: "deep", noKey: true });
expect.addSnapshotSerializer(serializer);

configure({ adapter: new Adapter() });
