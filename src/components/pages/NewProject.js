import ProjectForm from "../project/ProjectForm"
import styles from "./NewProject.module.css"
function NewProject() {
    return (
        <div className={styles.container_project}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar projeto" />

        </div>
    )
}

export default NewProject