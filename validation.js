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
      // {
      //   rule: 'number',
      // },
      // {
      //   rule: 'minLength',
      //   value: 10,
      // },
      // {
      //   rule: 'maxLength',
      //   value: 10,
      // },
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
    .addField('#condition', [
      {
        rule: 'required',
        errorMessage:"You should accept terms & condition."
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


      const displyTable = document.getElementById('displyTable');

      validator.onSuccess(() =>{
        const formData = new FormData(formE1)

        const dataObj= Object.fromEntries(formData.entries());

        localStorage.setItem("courierData", JSON.stringify(dataObj))

       

        let localStorageData=[];

        localStorageData.push(JSON.parse(localStorage.getItem("courierData")))

        console.log(localStorageData);

        localStorageData.map((data) => {

          displyTable.innerHTML=`
          <tr class="bg-zinc-200 rounded cursor-pointer hover:bg-zinc-300">
          <td class="py-3 px-4">1</td>
          <td class="py-3 px-4">${data.userName}</td>
          <td class="py-3 px-4">0764867457</td>
          <td class="py-3 px-4 whitespace-nowrap">03,Apr - 2025, 11.36 am</td>
          <td class="py-3 px-4">Punnalaikkadduvan</td>
          <td class="py-3 px-4">
            <button
              class="bg-red-500 hover:bg-red-600 transition cursor-pointer py-1 px-2 font-semibold text-white shadow-2xl rounded text-sm"
            >
              Delete
            </button>
          </td>
        </tr>
        
        `
        })
        

        
        
        
      })


