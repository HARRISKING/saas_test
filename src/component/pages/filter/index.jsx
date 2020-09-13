import React from 'react'
import { Form, Input, Button } from 'antd';

class Page extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.form.validateFields();
  }



  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onRefresh({
          type: 'filter',
          values
        })
      }
    });
  };

  formatHtml(element, index, getFieldDecorator) {
    return (
      <Form.Item label={element.label} key={index}>
        {getFieldDecorator(element.name, {
          rules: [{ required: false, message: 'Please input your username!' }],
        })(
          <Input
            placeholder={element.placeholder}
          />,
        )}
      </Form.Item>
    )
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { filterConfig } = this.props;

    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        {
          filterConfig.map((element, index) => this.formatHtml(element, index, getFieldDecorator))
        }
        <Form.Item>
          <Button type="primary" className="g-mr10" htmlType="submit">
            查询
          </Button>
        </Form.Item>
      </Form >
    )
  }
}
const Pages = Form.create({ name: 'horizontal_login' })(Page);

export default Pages