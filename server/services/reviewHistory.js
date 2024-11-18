import { ReviewHistory } from "../models/index.js";
import { BaseService } from "./baseService.js";

class ReviewHistoryService extends BaseService {

}

const reviewHistoryService = new ProfileItemsService(ReviewHistory);

export { reviewHistoryService }