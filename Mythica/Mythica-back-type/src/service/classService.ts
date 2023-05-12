import IClass from "../interface/classInterface";
import ClassModel from "../model/ClassModel";

export default class classService {
  static async listAllClasses(): Promise<IClass[]> {
    return ClassModel.find();
  }

  static async getClassById(_id: string): Promise<IClass> {
    const foundClass: IClass | null = await ClassModel.findById(_id);

    if (!foundClass) throw new Error("Class not found");

    return foundClass;
  }

  static async createClass(Class: IClass): Promise<IClass> {
    const createdClass: IClass | null = await ClassModel.create(Class);

    if (!createdClass) throw new Error("Error to create Class");

    return createdClass;
  }

  static async updateClassById(id: string, Class: IClass): Promise<IClass> {
    for (const value in Class) {
      if (!(Class as any)[value]) (Class as any)[value] = undefined;
    }

    const updatedClass: IClass | null = await ClassModel.findByIdAndUpdate(
      id,
      Class,
      {
        returnOriginal: false,
      }
    );

    if (!updatedClass) throw new Error("Error to update class");

    return updatedClass;
  }

  static async deleteClassById(id: string): Promise<IClass> {
    const deleteClass: IClass | null = await ClassModel.findByIdAndDelete(id);

    if (!deleteClass) throw new Error("Error to delete class");

    return deleteClass;
  }
}
