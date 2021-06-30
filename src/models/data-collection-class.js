'use strict';

class Model{
    constructor(model){
        this.model=model;
    }

    get(id){
        if(_id){
            return this.model.findById(_id);
        }
        else{
            return this.model.find({});
        }
    }
    getBy(obj){
        return this.model.find(obj);
    }

    create(obj){
        let newRecord=new this.model(obj);
        newRecord.save();
        return newRecord;
     
    

    }
    update(id,obj){
        return this.model.findByIdAndUpdate(_id,obj,{new:true});
        
    }
       
    delete(id){
        return this.model.findByIdAndDelete(_id);

    }
}
module.exports=Model;