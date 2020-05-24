import * as React from "react"
import { shallow } from "enzyme"

import { ResolutionGuard } from "./ResolutionGuard"

describe("ResoltuionGuard", () => {
    it("renders no children info", () => {
        const component = shallow(<ResolutionGuard />)
        expect(component.text()).toEqual("No children")
    })

    it("render children", () => {
        const v = "test children value"
        const component = shallow(<ResolutionGuard>{v}</ResolutionGuard>)
        expect(component.text()).toEqual(v)
    })
})
