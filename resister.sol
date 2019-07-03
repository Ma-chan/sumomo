pragma solidity ^0.4.22;
//ユーザの本人確認コントラクト
contract User_Certification{

    address admin;
    
    //閲覧詳細
    struct Brause_Detail{
        bool allow_reference;
        uint256 refLim_Blnum;
        uint256 approve_Blnum;
        address applicant;
    }
    
    //学生の情報
    struct Student{
        uint User_ID;
        uint Accept_Num;
        uint result_hash;
        uint code_hash;
    }
    
    //教師の情報
    struct Org{
        uint User_ID;
    }
    
    mapping(address => Brause_Detail) brause_detail;
    mapping(address => Student) student;
    mapping(address => Org) org;
    
    function User_Reference{
        admin = msg.sender;
    }
    
    function Set_Student(uint User_ID,uint Accept_Num,uint result_hash,uint code_hash){
        Student[msg.sender].user_ID=_user_ID;
        Student[msg.sender].accept_num=_accept_num;
        Student[msg.sender].result_hash=_result_hash;
        Student[msg.sender].code_hash=_code_hash;
    }
    
    function Set_Org(uint User_ID){
        Org[msg.sender].user_ID=_user_ID;
    }
    
    function set_Reference(address _applicant, uint256 ){
        Brause_Detail[msg.sender].
    }
    
    function setApprove(address _applicant, ){
        Brause_Detail[msg.sender].allow_reference = true;
        Brause_Detail[msg.sender].approve_Blnum = block.number;
        Brause_Detail[msg.sender].refLim_Blnum = block.number + _span;
        Brause_Detail[msg.sender].applicant = _applicant;
    }
    
    function getUser(address _person) public constant returns{
        bool allow_reference,
        uint256 refLim_Blnum,
        uint256 approve_Blnum,
        address applicant,
    }
    _allow_reference = Brause_Detail[_person].allow_reference;
    _refLim_Blnum = Brause_Detail[_person].refLim_Blnum;
    _approve_Blnum = Brause_Detail[_person].approve_Blnum;
    _applicant = Brause_Detail[_person].applicant;
    
    if ((msg.sender == _applicant))
}
//ユーザの参照と追加
contract User_Reference{
    
}
