import React from "react";
import { Panel } from './Panel';
import { Button } from './Button';

export function Form() {
    return (
        <Panel title="Welcome">
            <Button>Sign up</Button>
            <Button>Log in</Button>
        </Panel>
    );
}
