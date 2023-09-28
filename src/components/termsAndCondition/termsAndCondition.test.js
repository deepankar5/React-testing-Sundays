import { render, screen } from "@testing-library/react"
import TermsAndCondition from "./index"
import userEvent from '@testing-library/user-event'

describe("Terms and condition", ()=> {
    test("intially the checkbox should be disabled", ()=> {
        render(<TermsAndCondition/>)
        const CheckBox  = screen.getByRole("checkbox")
        expect(CheckBox).not.toBeChecked()
    })

    test("if the check box is checked then the button should be enabled", async()=> {  
        const user = userEvent.setup()
        render(<TermsAndCondition/>)
        const CheckBox  = screen.getByRole("checkbox")
        const SubmitButton = screen.getByRole("button")
        expect(CheckBox).not.toBeChecked()
        expect(SubmitButton).toBeDisabled()
        await user.click(CheckBox)  
        expect(CheckBox).toBeChecked()
        expect(SubmitButton).not.toBeDisabled()
    })

    test("pop over response on hover", async()=> {
        const user = userEvent.setup()
        render(<TermsAndCondition/>)
        // initally the popover should be hidden
        const nullPopOver = screen.queryByText(/hoverText/i)
        expect(nullPopOver).not.toBeInTheDocument()

        // popover apperers when we mouse over the tearms and condition
        const text = screen.getByText(/Terms and Condition/i)
        await user.hover(text)
        const hoverText = screen.getByText(/hoverText/i)
        expect(hoverText).toBeInTheDocument()
        // popover disappere when we mouse comes out of the tearms and condition
        await user.unhover(text)
        expect(hoverText).not.toBeInTheDocument()   
    })
})