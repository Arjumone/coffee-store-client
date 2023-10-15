
import {useLoaderData} from 'react-router-dom'
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData()

    const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

    const handleUpdateCoffee = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = {name,quantity,supplier,taste,category,details,photo}
        console.log(updatedCoffee);

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount){
              Swal.fire({
                title: 'Success!',
                text: 'Coffee updated successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
            
        })
    }

    return (
        <div className=" bg-[#f4f3f0] p-24">
        <h2 className=" text-3xl font-extrabold">Update a Coffee</h2>
        <form onSubmit={handleUpdateCoffee}>
          {/* form name an quantity row */}
          <div className=" md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="name" defaultValue={name}
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="quantity"
                placeholder="available Quantity" defaultValue={quantity}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          </div>
          {/* form supplier and taste row */}
          <div className=" md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="supplier"
                placeholder="Supplier Name" defaultValue={supplier}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="taste"
                placeholder="Taste" defaultValue={taste}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          </div>
          {/* form category and details row */}
          <div className=" md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="category"
                placeholder="Category" defaultValue={category}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="details"
                placeholder="Details" defaultValue={details}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          </div>
          {/* form photo URL  */}
          <div className=" mb-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="photo"
                placeholder="Photo URL" defaultValue={photo}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          </div>
          <input type="submit" value="Update Coffee" className=" btn btn-block bg-black text-white"/>
        </form>
      </div>
    );
};

export default UpdateCoffee;