webix.ready(function(){
    webix.ui({
        view: "accordion",
        multi: false,
        height: "auto",
        rows:[
            {
                  header: "Amazon Credentials",
                  body: {
                    view: "form",
                    id: "creds_form",
                    elements: [
                    {
                      view: "text",
                      labelWidth: "128",
                      label: "AWS Access ID"
                    },{
                      view: "text",
                      labelWidth: "128",
                      type: "password",
                      label: "AWS Secret Key"
                    },
                    {
                      labelWidth: "128",
                      view: "checkbox",
                      label: "Remember These"
                    }
                    ]
              }
            },
        {
          header: "Current/Pending Transfers",
          collapsed: true,
          body: {
            view: "datatable",
            columns:[
            {
              id: "actions",
              minWidth: 100,
              header: ""
            },
            {
              id: "filename",
              minWidth: 100,
              header: "Filename"
            },
            {
              id: "vault",
              minWidth: 100,
              header: "Vault"
            },
            {
              id: "region",
              minWidth: 100,
              header: "Region"
            },
            {
              id: "rate",
              header: "Rate",
              minWidth: 200
            },
            {
              id: "progress",
              header: "Progress",
              minWidth: 200
            },
            {
              id: "eta",
              header: "Eta",
              minWidth: 200
            }
            ]
          }
        },
        {
          header: "Upload Files",
          collapsed: true,
          body: {
                view: "form",
                cols: [
                {
                  rows:[
                    {
                      view: "select",
                      label: "Region",
                      options: []
                    },{
                      view: "select",
                      label: "Vault",
                      multiview: true,
                      options: []
                    }
                    ]
                },
              {
                rows:[
                {
                  view: "list",
                  id: "upload-list",
                  type: "uploader",
                  borderless: true
                },
                {cols:[
                    {
                      view: "uploader",
                      value: "Add file(s)",
                      name: "upload",
                      link: "upload-list",
                      upload: "#"
                  },
                  {
                      view: "button",
                      value: "Upload!"
                  }
                 ]}
                ]
              }
            ]
          }
        }
        ]
    });
});
