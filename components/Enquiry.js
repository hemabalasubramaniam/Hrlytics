import React from "react";
import '../styles.css';
import { Formik, Field, Form } from "formik";
import { Modal, Table, Button, Icon, Input, Select, Label, Checkbox } from 'semantic-ui-react'
import axios from 'axios'
import moment from 'moment';

class Enquiry extends React.Component {
    constructor() {
        super();
        this.state = {
            error: <span>&nbsp;</span>,
            loggedIn: false,
            enquiryData: [],
            sNoSortOrder : 1,
            nameSortOrder : 1,
            emailSortOrder : 1,
            createdDateSortOrder: 1,
            respondedDateSortOrder: 1,
            isRespondedSortOrder: 1,
            sortedBy: 'sNo',
            searchBy: 'name'
        }
        this.backupData = [];
        this.showableData = [];
    }

    login(values,url) {
        if(values.username==='admin'&&values.password==='admin') { 
            this.setState({ loggedIn: true}) ;
            // values.preventDefault();
            axios
            .get(url+"enquiry")
            .then((response) => {
                response.data.forEach((ele, i)=>{
                    ele.sNo = i+1;
                })
                this.setState({ enquiryData : response.data });
                this.backupData = response.data;
            })
            .catch((err) => {
                console.log(err.message);
            });
        }
        else { this.setState({error: 'Invalid Username and Password...!'}) }
        // this.setState({ loggedIn: true });
    }

    respondHandler = (ele,i,url) => {

        axios
        .put(url+"enquiry/"+ele.id)
        .then((response) => {
            axios
            .get(url+"enquiry")
            .then((response) => {
                this.setState({ enquiryData : response.data })
            })
            .catch((err) => {
                console.log(err.message);
            });
        })
        .catch((err) => {
            console.log(err.message);
        });
    } 

    sortFnBySNo = (p) => {
        var { enquiryData, nameSortOrder, sNoSortOrder, emailSortOrder, createdDateSortOrder, respondedDateSortOrder, isRespondedSortOrder, sortedBy } = this.state;
        if(sortedBy === 'sNo') sNoSortOrder = -1 * sNoSortOrder;
        else sNoSortOrder = 1;
        nameSortOrder = 1;
        emailSortOrder = 1;
        createdDateSortOrder = 1;
        respondedDateSortOrder = 1;
        isRespondedSortOrder = 1;
        enquiryData.sort((a,b)=>{
            return sNoSortOrder * (a[p]- b[p]);
        });
        this.setState({ enquiryData: enquiryData, nameSortOrder: nameSortOrder, sortedBy: p, sNoSortOrder: sNoSortOrder, emailSortOrder: emailSortOrder, createdDateSortOrder: createdDateSortOrder, respondedDateSortOrder: respondedDateSortOrder, isRespondedSortOrder: isRespondedSortOrder });
    }

    sortFnByName = (p) => {
        var { enquiryData, nameSortOrder, sNoSortOrder, emailSortOrder, createdDateSortOrder, respondedDateSortOrder, isRespondedSortOrder, sortedBy } = this.state;
        if(sortedBy === 'name') nameSortOrder = -1 * nameSortOrder;
        else nameSortOrder = 1;
        sNoSortOrder = 1;
        emailSortOrder = 1;
        createdDateSortOrder = 1;
        respondedDateSortOrder = 1;
        isRespondedSortOrder = 1;
        enquiryData.sort((a,b)=>{
            return nameSortOrder * (a[p].localeCompare( b[p]));
        });
        this.setState({ enquiryData: enquiryData, nameSortOrder: nameSortOrder, sortedBy: p, sNoSortOrder: sNoSortOrder, emailSortOrder: emailSortOrder, createdDateSortOrder: createdDateSortOrder, respondedDateSortOrder: respondedDateSortOrder, isRespondedSortOrder: isRespondedSortOrder });
    }
     
    sortFnByEmail = (p) => {
        var { enquiryData, nameSortOrder, sNoSortOrder, emailSortOrder, createdDateSortOrder, respondedDateSortOrder, isRespondedSortOrder, sortedBy } = this.state;
        if(sortedBy === 'email') emailSortOrder = -1 * emailSortOrder;
        else emailSortOrder = 1;
        nameSortOrder = 1;
        sNoSortOrder = 1;
        createdDateSortOrder = 1;
        respondedDateSortOrder = 1;
        isRespondedSortOrder = 1;
        enquiryData.sort((a,b)=>{
            return emailSortOrder * (a[p].localeCompare( b[p]));
        });
        this.setState({ enquiryData: enquiryData, nameSortOrder: nameSortOrder, sortedBy: p, sNoSortOrder: sNoSortOrder, emailSortOrder: emailSortOrder, createdDateSortOrder: createdDateSortOrder, respondedDateSortOrder: respondedDateSortOrder, isRespondedSortOrder: isRespondedSortOrder });
    }

    sortFnByCreatedDate = (p) => {
        var { enquiryData, nameSortOrder, sNoSortOrder, emailSortOrder, createdDateSortOrder, respondedDateSortOrder, isRespondedSortOrder, sortedBy } = this.state;
        if(sortedBy === 'contacted_date') createdDateSortOrder = -1 * createdDateSortOrder;
        else createdDateSortOrder = 1;
        emailSortOrder = 1;
        nameSortOrder = 1;
        sNoSortOrder = 1;
        respondedDateSortOrder = 1;
        isRespondedSortOrder = 1;
        enquiryData.sort((a,b)=>{
            return createdDateSortOrder * (a[p].localeCompare( b[p]));
        });
        this.setState({ enquiryData: enquiryData, nameSortOrder: nameSortOrder, sortedBy: p, sNoSortOrder: sNoSortOrder, emailSortOrder: emailSortOrder, createdDateSortOrder: createdDateSortOrder, respondedDateSortOrder: respondedDateSortOrder, isRespondedSortOrder: isRespondedSortOrder });
    }

    sortFnByRespondedDate = (p) => {
        var { enquiryData, nameSortOrder, sNoSortOrder, emailSortOrder, createdDateSortOrder, respondedDateSortOrder, isRespondedSortOrder, sortedBy } = this.state;
        if(sortedBy === 'responded_date') respondedDateSortOrder = -1 * respondedDateSortOrder;
        else respondedDateSortOrder = 1;
        createdDateSortOrder = 1;
        emailSortOrder = 1;
        nameSortOrder = 1;
        sNoSortOrder = 1;
        isRespondedSortOrder = 1;
        enquiryData.sort((a,b)=>{
            if (a[p] === null) a[p] = '';
            if (b[p] === null) b[p] = '';
            return respondedDateSortOrder * (a[p].localeCompare( b[p]));
        });
        this.setState({ enquiryData: enquiryData, nameSortOrder: nameSortOrder, sortedBy: p, sNoSortOrder: sNoSortOrder, emailSortOrder: emailSortOrder, createdDateSortOrder: createdDateSortOrder, respondedDateSortOrder: respondedDateSortOrder, isRespondedSortOrder: isRespondedSortOrder });
    }

    sortFnByIsResponded = (p) => {
        var { enquiryData, nameSortOrder, sNoSortOrder, emailSortOrder, createdDateSortOrder, respondedDateSortOrder, isRespondedSortOrder, sortedBy } = this.state;
        if(sortedBy === 'is_responded') isRespondedSortOrder = -1 * isRespondedSortOrder;
        else isRespondedSortOrder = 1;
        respondedDateSortOrder = 1;
        createdDateSortOrder = 1;
        emailSortOrder = 1;
        nameSortOrder = 1;
        sNoSortOrder = 1;
        enquiryData.sort((a,b)=>{
            return isRespondedSortOrder * (a[p] - b[p]);
        });
        this.setState({ enquiryData: enquiryData, nameSortOrder: nameSortOrder, sortedBy: p, sNoSortOrder: sNoSortOrder, emailSortOrder: emailSortOrder, createdDateSortOrder: createdDateSortOrder, respondedDateSortOrder: respondedDateSortOrder, isRespondedSortOrder: isRespondedSortOrder });
    }

    searchTypeChanger = (e, {value}) => {
        console.log('onchange',e);
        this.setState({ searchBy: value});
    }

    searchFn = (e, {value}) => {
        console.log('searching...', value, e);
        var { searchBy } = this.state;
        var filteredEnquiryData = this.showableData.filter((ele)=>{
            return ele[searchBy].toLowerCase().includes(value.toLowerCase());
        });
        this.setState({ enquiryData : filteredEnquiryData });
    }

    toggleFn = (e, {checked}) => {
        console.log('checked?', checked, e);
        if(checked){
            this.showableData = this.backupData.filter((ele)=>{return ele.is_responded === 0});
        }
        else{
            this.showableData = this.backupData;
        }
    }
     
    render() {
        const { loggedIn, error, enquiryData, sortedBy, nameSortOrder, sNoSortOrder, emailSortOrder, createdDateSortOrder, respondedDateSortOrder, isRespondedSortOrder } = this.state;
        const {url} = this.props;
        const selectOptions = [
            {key: 'name', value: 'name', text: 'Name'},
            {key: 'email', value: 'email', text: 'Email'},
            {key: 'message', value: 'message', text: 'Message'}
        ]
        return (
            <>
                {loggedIn ?
                    <div className="enquiryTable">
                        <h1>Enquiries</h1>
                        <div className="enquirySearch">
                            <Label pointing='right' size='large'>Search by: </Label>
                            <Select options={selectOptions} defaultValue={selectOptions[0].value} onChange={(e,option)=>this.searchTypeChanger(e,option)} />&nbsp;
                            <Input placeholder='Search Here...' onChange={(e,val)=>this.searchFn(e,val)} />
                        </div><br/><br/><br/>
                        <div className="enquirySearch">
                            <Checkbox toggle onChange={(e,data)=>this.toggleFn(e,data)} />&nbsp;&nbsp;&nbsp;
                            <Label tag className="label1">Not Responded Only</Label>
                        </div><br/><br/>
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>
                                        S.No.
                                        <Icon name={`${sortedBy==='sNo'?'sort amount':'long arrow alternate'} ${sNoSortOrder === 1 ? ' down':' up'}`} className="enqTableSortIcon" onClick={()=>this.sortFnBySNo('sNo')}/>
                                    </Table.HeaderCell>
                                    <Table.HeaderCell>
                                        Name
                                        <Icon name={`${sortedBy==='name'?'sort amount':'long arrow alternate'} ${nameSortOrder === 1 ? ' down':' up'}`} className="enqTableSortIcon" onClick={()=>this.sortFnByName('name')}/>
                                    </Table.HeaderCell>
                                    <Table.HeaderCell>
                                        Email
                                        <Icon name={`${sortedBy==='email'?'sort amount':'long arrow alternate'} ${emailSortOrder === 1 ? ' down':' up'}`} className="enqTableSortIcon" onClick={()=>this.sortFnByEmail('email')}/>
                                    </Table.HeaderCell>
                                    <Table.HeaderCell>Message</Table.HeaderCell>
                                    <Table.HeaderCell>
                                        Created Date
                                        <Icon name={`${sortedBy==='contacted_date'?'sort amount':'long arrow alternate'} ${createdDateSortOrder === 1 ? ' down':' up'}`} className="enqTableSortIcon" onClick={()=>this.sortFnByCreatedDate('contacted_date')}/>
                                    </Table.HeaderCell>
                                    <Table.HeaderCell>
                                        Responded Date
                                        <Icon name={`${sortedBy==='responded_date'?'sort amount':'long arrow alternate'} ${respondedDateSortOrder === 1 ? ' down':' up'}`} className="enqTableSortIcon" onClick={()=>this.sortFnByRespondedDate('responded_date')}/>
                                    </Table.HeaderCell>
                                    <Table.HeaderCell>
                                        Is Responded
                                        <Icon name={`${sortedBy==='is_responded'?'sort amount':'long arrow alternate'} ${isRespondedSortOrder === 1 ? ' down':' up'}`} className="enqTableSortIcon" onClick={()=>this.sortFnByIsResponded('is_responded')}/>
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {enquiryData.map((ele,i) => (
                                    <Table.Row key={i}>
                                        <Table.Cell>{ele.sNo}</Table.Cell>
                                        <Table.Cell>{ele.name}</Table.Cell>
                                        <Table.Cell>{ele.email}</Table.Cell>
                                        <Table.Cell>{ele.message}</Table.Cell>
                                        <Table.Cell>{ele.contacted_date?moment(ele.contacted_date).format('yyyy-MM-DD hh:mm:ss'):""}</Table.Cell>
                                        <Table.Cell>{ele.responded_date?moment(ele.responded_date).format('yyyy-MM-DD hh:mm:ss'):""}</Table.Cell>
                                        <Table.Cell>{ele.is_responded ? <Icon name='check circle' color="green" size='large' /> : <Button positive onClick={()=>this.respondHandler(ele,i,url)}>Respond</Button>}</Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
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
        )
    }
}

export default Enquiry;