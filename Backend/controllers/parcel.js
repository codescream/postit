import ParcelModel from "../models/Parcel.js";

export const addParcel = async (req, res) => {
  console.log("adding parcel");

  const parcel = ParcelModel(req.body);

  try {
    const newParcel = await parcel.save();

    res.status(200).json({ response: "parcel created", object: newParcel });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const fetchAllParcels = async (req, res) => {
  try {
    const parcels = await ParcelModel.find({}).sort("-createdAt");

    if (!parcels) return res.status(404).json("no parcels found");

    res.status(201).json({parcels: parcels});
  } catch (error) {
    res.status(500).json(error);
  }
};

export const fetchParcel = async (req, res) => {
  const { id } = req.params;
  try {
    const parcel = await ParcelModel.findOne({ _id: id });

    if (!parcel) return res.status(404).json("parcel not found");

    res.status(201).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateParcel = async (req, res) => {
  const { id } = req.params;

  const parcel = await ParcelModel.findByIdAndUpdate({ _id: id }, req.body);

  if (!parcel) return res.status(404).json("No package found");

  res.status(200).json(parcel);
};

export const getUserParcel = async (req, res) => {
  const { email } = req.body;
  try {
    const userParcels = await ParcelModel.find({ senderemail: email }).sort(
      "-createdAt"
    );

    if (!userParcels) return res.status(404).json("No parcel found for user");

    res.status(201).json(userParcels);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteParcel = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedParcel = await ParcelModel.findOneAndDelete({ _id: id });

    if (!deletedParcel) return res.status(404).json("No such parcel found");

    res.status(201).json({ message: "parcel deleted", deletedParcel });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const userParcels = async (req, res) => {
  const { id } = req.params;

  try {
    const userParcels = await ParcelModel.find({ senderID: id });

    if (!userParcels) return res.status(404).json("No parcel found");

    res.status(200).json(userParcels);
  } catch (error) {
    res.status(500).json(error);
  }
};
