import { Link } from "react-router-dom"
import CourseCard from "./CourseCard"
import { CursoMap } from "@/utils"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CatalogoPage()
{
    return(
        <div className="">
            <h1 className="text-2xl">Catalogo</h1>
            <p className="font-semibold">Navegue por todo conteudo da SFFS</p>
            <div className="flex mt-4 items-start gap-4">
                <div className=" overflow-y-scroll scrol flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
           
                    
                   {CursoMap.map((curso, index)=>(
                        <Link to="/cursos/2" key={index}>
                            <CourseCard course={curso.course}
                                 level={curso.level}
                                structor={curso.structor}
                                structor_about={curso.structor_about}
                                imageCourse={curso.imageCourse}
                            />
                    </Link>
                   ))}
                   
                </div>
                <div className="w-64 sticky">
                    <span className="text-lg">Filtros</span>

                    <div className="mt-4">
                    <Label>Ordem de visualização</Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Selecione a ordem" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem  value="apple">A - Z</SelectItem>
                                <SelectItem value="banana">Z - A</SelectItem>         
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="mt-4">
                        <div className="text-zinc-600">
                            <h3 className="text-sm font-bold text-zinc-800">Nivel</h3>
                            <div className="flex gap-1 flex-1">
                                <input className="text-sm" id="basico" type="checkbox" />
                                <label htmlFor="basico">Básico</label>
                            </div>
                            <div className="flex gap-1">
                                <input className="text-sm" id="interme" type="checkbox" />
                                <label htmlFor="interme">Intermediario</label>
                            </div>
                            <div className="flex gap-1">
                                <input className="text-sm" id="avancado" type="checkbox" />
                                <label htmlFor="avancado">Avançado</label>
                            </div>
                        </div>
                        <div className="w-full h-[3px] bg-slate-100 my-2"></div>
                    </div>


                    
                </div>
            </div>
        </div>
    )
}