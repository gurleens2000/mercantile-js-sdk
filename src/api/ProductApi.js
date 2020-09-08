/*
 * Mercantile API
 * Programmatic access to the Mercantile service
 *
 * OpenAPI spec version: v1
 * Contact: gurleen.singh@drexel.edu
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse2004', 'model/Product'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2004'), require('../model/Product'));
  } else {
    // Browser globals (root is window)
    if (!root.MercantileApi) {
      root.MercantileApi = {};
    }
    root.MercantileApi.ProductApi = factory(root.MercantileApi.ApiClient, root.MercantileApi.InlineResponse2004, root.MercantileApi.Product);
  }
}(this, function(ApiClient, InlineResponse2004, Product) {
  'use strict';

  /**
   * Product service.
   * @module api/ProductApi
   * @version v1
   */

  /**
   * Constructs a new ProductApi. 
   * @alias module:api/ProductApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the productList operation.
     * @callback module:api/ProductApi~productListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and filter all available products.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page A page number within the paginated result set.
     * @param {module:api/ProductApi~productListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */
    this.productList = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/product/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the productRead operation.
     * @callback module:api/ProductApi~productReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Product} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and filter all available products.
     * @param {Number} id A unique integer value identifying this product.
     * @param {module:api/ProductApi~productReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Product}
     */
    this.productRead = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling productRead");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Product;

      return this.apiClient.callApi(
        '/product/{id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));