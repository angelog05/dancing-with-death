# DESAFIO

## Configuracion MongoDB

Para cambiar la base de datos a una local u otra en la nube, de debe
modificar la variable `connectionUrl` dentro de `databaseConfig`en el archivo: 

```
── app
── config
    └── config.json
```

## Generar Cita

`POST ->  /dance`

```
body: {
    "date": "",
    "hour": "",
    "email": ""
}
```

- [ ] Formato para la fecha: MM-DD-YYYY.
- [ ] Formato para la hora: "9" ó 9.
  - [ ] solo pueden ser horas fijas:
    - [ ] valido: "9", 15, 18, "17".
    - [ ] invalido: "9.30", 16.40, "14:30"


## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin 
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations]({{INITIALIZEME_REPO_URL}}/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)
