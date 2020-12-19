function deleteLead(LeadId)
{
   $.ajax({
       url:'/lead/'+LeadId+'/delete-json',
       contentType: 'application/json',
       dataType: 'json',
       data:JSON.stringify({LeadId}),
       type:"POST",
       success: ((res)=>{
           $("#"+LeadId).remove();
       }),
       error:((error)=>{
           console.log("Error:",error)
       }),
   });
}
