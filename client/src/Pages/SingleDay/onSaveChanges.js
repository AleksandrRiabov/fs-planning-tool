export const onSaveChages = ({ data, setSaving, setNewChanges }) => {
   const saveChanges = async () => {
     setSaving((prev) => ({
       ...prev,
       inProgress: true,
       message: "Saving.. Plesase Wait..",
     }));
     try {
       const res = await fetch(`/api/day/${data._id}`, {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(data.products),
       });
       if (res.status !== 200) {
         throw new Error({ message: "Not saved" });
       }
       setSaving((prev) => ({
         ...prev,
         inProgress: true,
         message: "Day Details Has Been Updated..",
         showBtn: true,
       }));
       setNewChanges(false);
     } catch (e) {
       setSaving({
         inProgress: true,
         showBtn: true,
         message: "Could Not Save Data! Please try again..",
       });
     }
   };
   return saveChanges;
 };
 