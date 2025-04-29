const validator = new JustValidate('#inputform');

const formE1=document.getElementById('inputform')

validator
    .addField('#userName', [
      {
        rule: 'required',
      },
      {
        rule: 'minLength',
        value: 3,
      },
      {
        rule: 'maxLength',
        value: 15,
      },
    ],{
        errorLabelCssClass: ['error_label'],
      });

      validator
    .addField('#userTel', [
      {
        rule: 'required',
      },
      {
        rule: 'number',
      },
      {
        rule: 'minLength',
        value: 10,
      },
      {
        rule: 'maxLength',
        value: 10,
      },
    ],{
        errorLabelCssClass: ['error_label'],
      });

      validator
      .addField('#userDate', [
        {
          rule: 'required',
        }
      ],{
          errorLabelCssClass: ['error_label'],
        });

    validator
    .addField('#userAddress', [
      {
        rule: 'required',
      },
      {
        rule: 'minLength',
        value: 10,
      },
      {
        rule: 'maxLength',
        value: 50,
      },
    ],{
        errorLabelCssClass: ['error_label'],
      });


      validator.onSuccess(() =>{
        const formData = new FormData(formE1)

        for(let data of formData.values()){
          console.log(data)
        }
        
      })


