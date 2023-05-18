import React, { Component } from 'react'
import { Divider } from 'antd';
import { Button, Space } from 'antd';

export class Antd extends Component {
    render() {
        return (
            <div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                        probare, quae sunt a te dicta? Refert tamen, quo modo.
                    </p>
                    <Divider plain>Text</Divider>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                        probare, quae sunt a te dicta? Refert tamen, quo modo.
                    </p>
                    <Divider orientation="left" plain>
                        Left Text
                    </Divider>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                        probare, quae sunt a te dicta? Refert tamen, quo modo.
                    </p>
                    <Divider orientation="right" plain>
                        Right Text
                    </Divider>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                        probare, quae sunt a te dicta? Refert tamen, quo modo.
                    </p>
                </div>
                <div>
                    <Space className="site-button-ghost-wrapper" wrap>
                        <Button type="primary" ghost>
                            Primary
                        </Button>
                        <Button>Default</Button>
                        <Button type="dashed">
                            Dashed
                        </Button>
                        <Button type="primary" danger ghost>
                            Danger
                        </Button>
                    </Space>
                </div>
            </div>
        )
    }
}

export default Antd