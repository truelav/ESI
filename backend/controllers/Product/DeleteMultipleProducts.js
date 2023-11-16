import Product from "../../models/Product/Product.js";

export const deleteMultipleProducts = async (req, res) => {
  try {

    const idsToDelete = req.body.products

    if(idsToDelete.length === 0) {
      res.status(300).json({message: "there are no products selected to delete"})
      return
    }

    const deletedProducts = await Product.deleteMany({ _id: {$in: idsToDelete}}, (error) => {
      if (error) {
        res.status(500).json({message: "Server Error", error})
      } else {
        res.status(200).json({message: 'Products Deleted Succesfully'})
      }
    })

    res.status(200).json({message: "product delete success", deletedProducts: deletedProducts});
    
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
