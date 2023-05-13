import React from "react";
import '../styles.css';
import { Formik, Field, Form } from "formik";
import { Modal, Table, Icon, Confirm, Button, Input, Dropdown, Grid, TextArea } from 'semantic-ui-react';
import axios from 'axios'

class JobRequirement extends React.Component {
    constructor() {
        super();
        this.state = {
            error: <span>&nbsp;</span>,
            loggedIn: false,
            details: [],
            deleteModal: false,
            modifyRow: null,
            editMode: false,
            tempdetail: {
                job_title: '',
                detail: '',
                job_description: '',
                location: '',
                notice_period: ''
            },
            addNew: false
        }
    }

    login(values,url) {
        if (values.username === 'admin' && values.password === 'admin') {
            this.setState({ loggedIn: true });

            axios
                .get(url+"jobRequirement")
                .then((response) => {
                    this.setState({ details: response.data });
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
        else { this.setState({ error: 'Invalid Username and Password...!' }) }
    }

    saveJobRequirement = (jobRequirement,url) => {
        console.log("jobRequirement passing")
        console.log(jobRequirement)
        axios
            .post(url+"jobRequirement/", jobRequirement)
            .then((response) => {
                console.log("jobRequirement created\n");
                axios
                    .get(url+"jobRequirement")
                    .then((response) => {
                        this.setState({ details: response.data });
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
            })
            .catch((err) => {
                console.log(err.message);
            });
        this.setState({ addNew: false });
    }

    deleteFn = (url) => {
        const { details, modifyRow,tempdetail } = this.state;
        console.log("tempdetail");
        console.log(tempdetail);
        console.log(tempdetail.id);
        axios
            .get(url+"jobRequirement/"+tempdetail.id)
            .then((response) => {
                console.log("jobrequirement deleted");
                axios
                    .get(url+"jobRequirement")
                    .then((response) => {
                        this.setState({ details: response.data });
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
            })
            .catch((err) => {
                console.log(err.message);
            })

        var temp = details.filter((element, i) => {
            return i !== modifyRow;
        });
        this.setState({ deleteModal: false, details: temp });
    }

    typingFn = (e) => {
        var name = e.target.name;
        var val = e.target.value;
        const { tempdetail, details } = this.state;
        tempdetail[name] = val;
        this.setState({ tempdetail: tempdetail });
        console.log(name, val, 'first...........', tempdetail, details);
    }

    completeEdit = () => {
        const { details, tempdetail, modifyRow } = this.state;
        var temp = details;
        temp[modifyRow] = tempdetail;
        this.setState({ details: temp, editMode: false });
    }

    render() {
        const { loggedIn, error, details, deleteModal, editMode, modifyRow, tempdetail, addNew } = this.state;
        const {url} = this.props;
        return (
            <>
                {loggedIn ?
                    <>
                        {deleteModal ?
                            <Confirm
                                open={true}
                                content='Are you sure to delete this row?'
                                onCancel={() => this.setState({ deleteModal: false })}
                                onConfirm={() => this.deleteFn(url)}
                            />
                            : <></>}

                        <div className="enquiryTable">
                            <div className="addButton">
                                <Button icon labelPosition='left' onClick={() => this.setState({ addNew: true, editMode:false })}>
                                    <Icon name='add user' />
                                    Add new
                                </Button>
                            </div>
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell width={1}>S.No</Table.HeaderCell>
                                        <Table.HeaderCell width={2}>Job Title</Table.HeaderCell>
                                        <Table.HeaderCell width={2}>Experience Details</Table.HeaderCell>
                                        <Table.HeaderCell width={6}>Job Description</Table.HeaderCell>
                                        <Table.HeaderCell width={2}>location</Table.HeaderCell>
                                        <Table.HeaderCell width={2}>Notice Period</Table.HeaderCell>
                                        <Table.HeaderCell width={2}>Modify</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {details.map((ele, i) => (
                                        <Table.Row key={i}>
                                            {editMode && modifyRow === i ?
                                                <>
                                                    <Table.Cell>{i + 1}</Table.Cell>
                                                    <Table.Cell><Input fluid name='job_title' value={ele.job_title} onChange={(e) => this.typingFn(e)} /></Table.Cell>
                                                    <Table.Cell>
                                                        <Input fluid type='number' name='required_experience_from' value={ele.required_experience_from} onChange={(e) => this.typingFn(e)} /><br />
                                                        <Input fluid type='number' name='required_experience_to' value={ele.required_experience_to} onChange={(e) => this.typingFn(e)} /><br />
                                                        <Input fluid name='duration_type' value={ele.duration_type} onChange={(e) => this.typingFn(e)} />
                                                    </Table.Cell>
                                                    <Table.Cell><TextArea style={{ minHeight: 150,minWidth: 450 }} name='job_description' value={ele.job_description} onChange={(e) => this.typingFn(e)} /></Table.Cell>
                                                    <Table.Cell><Input fluid name='location' value={ele.location} onChange={(e) => this.typingFn(e)} /></Table.Cell>
                                                    <Table.Cell><Input fluid type='number' name='notice_period' value={ele.notice_period} onChange={(e) => this.typingFn(e)} /></Table.Cell>
                                                    <Table.Cell>
                                                        <Icon name='save' color="green" className="tableIcon" onClick={() => this.completeEdit()} />
                                                        <Icon name='cancel' color="red" className="tableIcon" onClick={() => { this.setState({ editMode: false }) }} />
                                                    </Table.Cell>
                                                </>
                                                :
                                                <>
                                                    <Table.Cell>{i + 1}</Table.Cell>
                                                    <Table.Cell>{ele.job_title}</Table.Cell>
                                                    <Table.Cell>{ele.required_experience_from ? ele.required_experience_from + (ele.required_experience_to ? "-" + ele.required_experience_to : "+") + " " + ele.duration_type : "any"}</Table.Cell>
                                                    <Table.Cell>{ele.job_description}</Table.Cell>
                                                    <Table.Cell>{ele.location}</Table.Cell>
                                                    <Table.Cell>{ele.notice_period} months</Table.Cell>
                                                    <Table.Cell>
                                                        <Icon name='edit' className="tableIcon" onClick={() => this.setState({ editMode: true, modifyRow: i, tempdetail: ele, addNew:false })} />
                                                        <Icon name='trash' color="red" className="tableIcon" onClick={() => { this.setState({ deleteModal: true, modifyRow: i, tempdetail: ele }) }} />
                                                    </Table.Cell>
                                                </>
                                            }
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                            {addNew ?
                                <Formik
                                    initialValues={{ job_title: "", required_experience_from: "", required_experience_to: "", duration_type: "", job_description: "", location: "", notice_period: "" }}
                                    onSubmit={async (values) => {
                                        this.saveJobRequirement(values,url)
                                    }}
                                >
                                    <Form >
                                        <Table celled>
                                            <Table.Row>
                                                <Table.Cell width={1}>{details.length +1}</Table.Cell>
                                                <Table.Cell width={2}><Input fluid><Field name='job_title' placeholder='Job Title' /></Input></Table.Cell>
                                                <Table.Cell width={2}>
                                                    <Input fluid><Field name='required_experience_from' type="number" placeholder='From' /></Input><br />
                                                    <Input fluid><Field name='required_experience_to' type="number" placeholder='To' /></Input> <br />
                                                    <Field as='select' name='duration_type' className='dropDown'>
                                                        <option value="months">Month</option>
                                                        <option value="years">Year</option>
                                                    </Field>
                                                </Table.Cell>
                                                <Table.Cell width={6}><Field component='textarea' name='job_description' rows={9} cols={52} /></Table.Cell>
                                                <Table.Cell width={2}><Input fluid><Field name='location' /></Input></Table.Cell>
                                                <Table.Cell width={2}><Input fluid><Field name='notice_period' type="number" /></Input></Table.Cell>
                                                <Table.Cell width={2}>
                                                    <Button type="submit" icon='add user' color="green" circular inverted size='mini'></Button><br/><br/>
                                                    <Button icon='cancel' circular inverted size='mini' color="red"  onClick={() => this.setState({ addNew: false })} />
                                                </Table.Cell>
                                            </Table.Row>
                                        </Table>
                                    </Form>
                                </Formik>
                                : <></>
                            }
                        </div>
                    </>
                    :
                    <div className="adminLogin" style={{ height: window.innerHeight }}>
                        <Modal open={true} size={"tiny"} dimmer={'blurring'} >
                            <Modal.Header>Admin Login</Modal.Header>
                            <Modal.Content>
                                <Formik
                                    initialValues={{ username: "", password: "" }}
                                    onSubmit={async (values) => {
                                        this.login(values,url)
                                    }}
                                >
                                    <Form className="formLeft">
                                        <Field className="inputField" name="username" type="text" placeholder="Username" fluid='true' /><br /><br />
                                        <Field className="inputField" name="password" type="password" placeholder="Password" fluid='true' /><br /><br />
                                        <p style={{ color: 'red' }}>{error}</p>
                                        <button className="submitButton" type="submit">Login</button>
                                    </Form>
                                </Formik>
                            </Modal.Content>
                        </Modal>
                    </div>
                }
            </>
        );
    }
}

export default JobRequirement;