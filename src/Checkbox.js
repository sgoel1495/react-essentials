import React from 'react';

export function Checkbox() {
    const [checked, toggle] = React.useReducer(
        (checked) => !checked,
        false
    )
    return <>
        <label htmlFor={"checkbox"}>{checked ? "checked" : "not checked"}</label>
        <input id={"checkbox"} type={"checkbox"} value={checked} onChange={toggle} />
    </>
}